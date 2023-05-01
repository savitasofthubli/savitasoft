package com.savitasoft.demo.security.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
  
@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
	@Autowired
	private AuthenticationService authenticationService;
	
	@PostMapping("/register")
	public ResponseEntity<AuthenticationResponse> register(
			@RequestBody RegisterRequest registerRequest)
	{
		return ResponseEntity.ok(authenticationService.register(registerRequest));
		
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationResponse> authenticate(
			@RequestBody AuthenticationRequest authenticationRequest)
	{
		return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
		
	}

}
