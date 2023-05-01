package com.savitasoft.temp.security.config;

import com.savitasoft.temp.security.service.JwtService;
import com.savitasoft.temp.security.service.LocalUserService;
import jakarta.annotation.Nonnull;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JWTAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private LocalUserService localUserService;
    @Override
    protected void doFilterInternal(@Nonnull HttpServletRequest request, @Nonnull HttpServletResponse response, @Nonnull FilterChain filterChain)
            throws ServletException, IOException {
        final String authHeader;
        final String jwt;
        final String userPhoneNumber;
        authHeader = request.getHeader("Authorization");
        if(authHeader==null||!authHeader.startsWith("Bearer "))
        {
            filterChain.doFilter(request, response);
            return ;
        }
        jwt=authHeader.substring(7);
        userPhoneNumber= jwtService.extractUsername(jwt);
        if(userPhoneNumber !=null && SecurityContextHolder.getContext().getAuthentication()==null)
        {
            UserDetails userDetails = localUserService.loadUserByUsername(userPhoneNumber);
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