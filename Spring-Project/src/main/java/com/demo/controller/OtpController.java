package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.otpDto.PasswordResetRequest;
import com.demo.otpDto.PasswordResetResponse;
import com.demo.otpService.TwilioOtpService;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/v1/otp")
public class OtpController {
	@Autowired
	TwilioOtpService twilioOtpService;
	
	@PostMapping("/send")
	public ResponseEntity<PasswordResetResponse> SendOTP(@RequestBody PasswordResetRequest passwordResetRequest)
	{
		return twilioOtpService.sendOTPForPasswordReset(passwordResetRequest);
	}
	
	@PostMapping("/validate")
	public ResponseEntity<String> ValidateOTP(@RequestBody PasswordResetRequest passwordResetRequest)
	{
		return twilioOtpService.validateOTP(passwordResetRequest.getOneTimePassword(), passwordResetRequest.getUsername());
	}
}
