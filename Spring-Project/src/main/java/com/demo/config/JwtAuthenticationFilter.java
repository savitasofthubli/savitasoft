package com.demo.config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.demo.Service.UserSerivce;

import jakarta.annotation.Nonnull;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private JwtService jwtService;
	
	@Autowired 
	private UserSerivce userService;
	@Override
	protected void doFilterInternal(@Nonnull HttpServletRequest request,@Nonnull HttpServletResponse response,@Nonnull FilterChain filterChain)
			throws ServletException, IOException {
		final String authHeader;
		final String jwt;
		final String userPhoneno;
		authHeader = request.getHeader("Authorization");
		if(authHeader==null||!authHeader.startsWith("Bearer "))
		{
			filterChain.doFilter(request, response);
			return ;
		}
		jwt=authHeader.substring(7);
		userPhoneno= jwtService.extractUsername(jwt);
		if(userPhoneno !=null && SecurityContextHolder.getContext().getAuthentication()==null)
		{
			UserDetails userDetails = userService.loadUserByUsername(userPhoneno);
			if(jwtService.isTokenValid(jwt, userDetails))
			{
				UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
				authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(authToken);
			}
			filterChain.doFilter(request, response);
		}
	}

}
