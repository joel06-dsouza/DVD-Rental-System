package in.mindcraft.trialDVD.Staff;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.UUID;

@Service
public class JwtTokenProvider {

    @Value("${jwt.secret}") // Load the secret key from application properties
    private String secretKey;

    @Value("${jwt.expiration}")
    private long expiration;

    public String generateToken(String username, long storeId) {
        Date now = new Date();
        Date expiryDate = Date.from(Instant.now().plus(expiration, ChronoUnit.MINUTES));

        return Jwts.builder()
                .claim("username", username)
                .claim("storeId", storeId)
                .setId(UUID.randomUUID().toString())
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }
}
