package com.suulola.order.security.jwt;

import com.suulola.order.security.services.UserDetailsImpl;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtils {
    // does majorly three things
    //1. generate a JWT from username, date, expiration, secret
    //2. get username from JWT
    //3. validate a JWT

    private static final Logger LOGGER = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private int jwtExpirationMs;

    public String generateJwtToken(Authentication authentication) {
        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject(userPrincipal.getPassword())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + jwtExpirationMs))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }


    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser()
                    .setSigningKey(jwtSecret)
                    .parseClaimsJws(authToken);
            return true;
        } catch (ExpiredJwtException e) {
            LOGGER.error("Invalid JWT signature: {} ", e.getMessage());
            e.printStackTrace();
        } catch (UnsupportedJwtException e) {
            LOGGER.error("Invalid JWT signature: {} ", e.getMessage());
            e.printStackTrace();
        } catch (MalformedJwtException e) {
            LOGGER.error("Invalid JWT signature: {} ", e.getMessage());
            e.printStackTrace();
        } catch (SignatureException e) {
            LOGGER.error("Invalid JWT signature: {} ", e.getMessage());
            e.printStackTrace();
        } catch (IllegalArgumentException e) {
            LOGGER.error("Invalid JWT signature: {} ", e.getMessage());
            e.printStackTrace();
        }
        return false;
    }





}
