package com.savitasoft.demo.security.auth;

import com.savitasoft.demo.security.model.LocalUser;
import com.savitasoft.demo.security.repository.LocalUserRespository;
import com.savitasoft.demo.security.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service 
@RequiredArgsConstructor
public class AuthenticationService {

	@Autowired
	private LocalUserRespository userRepository;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public AuthenticationResponse register(RegisterRequest registerRequest) {
		var user  = LocalUser.builder()
					.phoneNumber(registerRequest.getPhonenumber())
					.password(passwordEncoder.encode(registerRequest.getPassword()))
					.role("USER")
					.build();
		userRepository.save((LocalUser) user);

		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.role("USER")
				.build();
	}

	public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getPhonenumber(),authenticationRequest.getPassword()));
		var user = userRepository.findByPhoneNumber(authenticationRequest.getPhonenumber())
				.orElseThrow();
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder()
				.token(jwtToken).role("USER").build();
	}

}
