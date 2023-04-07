package com.demo.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.demo.config.JwtService;
import com.demo.model.User;
import com.demo.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service 
@RequiredArgsConstructor
public class AuthenticationService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public AuthenticationResponse register(RegisterRequest registerRequest) {
		var user  = User.builder().name(registerRequest.getName())
					.phonenumber(registerRequest.getPhonenumber())
					.email(registerRequest.getEmail())
					.password(passwordEncoder.encode(registerRequest.getPassword()))
					.role("USER")
					.build();
		userRepository.save((User) user);
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.role("USER")
				.build();
	}

	public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getPhonenumber(),authenticationRequest.getPassword()));
		var user = userRepository.findByPhonenumber(authenticationRequest.getPhonenumber())
				.orElseThrow();
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder()
				.token(jwtToken).role("USER").build();
	}

}
