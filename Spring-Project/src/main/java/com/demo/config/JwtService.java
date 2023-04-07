package com.demo.config;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.demo.model.User;
import com.demo.repository.UserRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
	@Autowired
	private UserRepository userRepository;
	
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
		return Jwts
				.parserBuilder()
				.setSigningKey(getSignInKey())
				.build()
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
	public String generateToken(Map<String,Object> extraClaims,UserDetails userDetails)
	{
		Optional<User> user = userRepository.findByPhonenumber(((User) userDetails).getPhonenumber());
		
		if(user.isPresent())
		{
			role = user.get().getRole();
		}
		return Jwts.builder()
				.setClaims(extraClaims)
				.setSubject(((User) userDetails).getPhonenumber())
				.claim("role",role)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis()+1000*60*60*6))
				.signWith(getSignInKey(),SignatureAlgorithm.HS256)
				.compact();
	}
	public boolean isTokenValid(String token,UserDetails userDetails)
	{
		final String Username = extractUsername(token);
		
		return Username.equals(((User) userDetails).getPhonenumber()) && !isTokenExpired(token);
		
	}

	private boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}

	private Date extractExpiration(String token) {
		return extractClaim(token,Claims::getExpiration);	
	}

}
