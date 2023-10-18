package in.mindcraft.trialDVD.Jwt;

import java.security.Key;
import java.util.*;
import java.util.function.Function;

import io.jsonwebtoken.Claims;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;


@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String secretKey;

    // @Value("${jwt.expiration}")
    // private long expiration;

    public String generateToken(String userName) { 
        Map<String, Object> claims = new HashMap<>(); 
        return createToken(claims, userName); 
    }
     
  
    private String createToken(Map<String, Object> claims, String userName) { 
        return Jwts.builder() 
                .setClaims(claims) 
                .setSubject(userName) 
                .setIssuedAt(new Date(System.currentTimeMillis())) 
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 30)) 
                .signWith(SignatureAlgorithm.HS256, getSignKey()).compact(); 
    } 

    
    private Key getSignKey() { 
        byte[] keyBytes= Decoders.BASE64.decode(secretKey); 
        return Keys.hmacShaKeyFor(keyBytes); 
    } 
  
    public String extractUsername(String token) { 
        return extractClaim(token, Claims::getSubject); 
    } 
  
    public Date extractExpiration(String token) { 
        return extractClaim(token, Claims::getExpiration); 
    } 
  
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) { 
        final Claims claims = extractAllClaims(token); 
        return claimsResolver.apply(claims); 
    } 
  
    private Claims extractAllClaims(String token) { 
        return Jwts 
                .parser() 
                .setSigningKey(getSignKey()) 
                .parseClaimsJws(token) 
                .getBody(); 
    } 
  
    private Boolean isTokenExpired(String token) { 
        return extractExpiration(token).before(new Date()); 
    } 
  
    public Boolean validateToken(String token, UserDetails userDetails) { 
        final String username = extractUsername(token); 
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token)); 
    }
}
