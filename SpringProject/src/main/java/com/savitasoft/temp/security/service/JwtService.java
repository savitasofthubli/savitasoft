package com.savitasoft.temp.security.service;

import com.savitasoft.temp.security.model.LocalUser;
import com.savitasoft.temp.security.repository.LocalUserRespository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

@Service
public class JwtService {
    @Autowired
    private LocalUserRespository localUserRespository;

    private String role;

    private static final String SECRET_KEY = "635266556A586E3272357538782F413F442A472D4B6150645367566B59703373";
    public String extractUsername(String token) {
        return extractClaim(token,Claims::getSubject);
    }

    public <T> T extractClaim(String token,Function<Claims,T> claimsResolver)
    {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    public Claims extractAllClaims(String token)
    {
        return Jwts.parser()
                .setSigningKey(getSignInKey())
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keybytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keybytes);
    }

    public String generateToken(UserDetails userDetails)
    {
        return generateToken(new HashMap<>(),userDetails);

    }
    public String generateToken(Map<String,Object> extraClaims, UserDetails userDetails)
    {
        Optional<LocalUser> user =  localUserRespository.findByPhoneNumber(((LocalUser) userDetails).getPhoneNumber());

        if(user.isPresent())
        {
            role = user.get().getRole();
        }
        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(((LocalUser) userDetails).getPhoneNumber())
                .claim("role",role)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*60*6))
                .signWith(SignatureAlgorithm.HS256, getSignInKey())
                .compact();
    }
    public boolean isTokenValid(String token,UserDetails userDetails)
    {
        final String Username = extractUsername(token);

        return Username.equals(((LocalUser) userDetails).getPhoneNumber()) && !isTokenExpired(token);

    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token,Claims::getExpiration);
    }

}

