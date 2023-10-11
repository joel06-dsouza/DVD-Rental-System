package in.mindcraft.trialDVD.Jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class JwtTokenProvider {

    @Value("${jwt.secret}") // Load the secret key from application properties
    private String secretKey;

    @Value("${jwt.expiration}")
    private long expiration;

    public String generateToken(String username, long storeId, List<String> authorities) {
        Date now = new Date();
        Date expiryDate = Date.from(Instant.now().plus(expiration, ChronoUnit.MINUTES));

        return Jwts.builder()
                .claim("username", username)
                .claim("storeId", storeId)
                .claim("authorities", authorities) // Add authorities as a claim
                .setId(UUID.randomUUID().toString())
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }

    public String getUsernameFromToken(String token) {
        Claims claims = getClaimsFromToken(token);
        return claims.getSubject(); // The subject in JWT typically represents the username
    }
    
    public Claims getClaimsFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            // Invalid token
            return false;
        }
    }
}

