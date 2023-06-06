package com.savitasoft.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://15.206.159.116:4200")
@RestController
@RequestMapping("/api/v1/home-controller")

public class HomeController {
	@GetMapping("/hello")
	@PreAuthorize("USER")
	public ResponseEntity<String> sayHello()
	{
		return ResponseEntity.ok("Hello from Secured Endpoint");
	}
}
