package com.savitasoft.temp.controller;

import com.savitasoft.temp.registration.model.Registration;
import com.savitasoft.temp.otpDto.PasswordResetRequest;
import com.savitasoft.temp.otpDto.PasswordResetResponse;
import com.savitasoft.temp.otpService.TwilioOtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/otp/otp-controller")
public class OtpController {
	@Autowired
	TwilioOtpService twilioOtpService;

	@PostMapping("/send")
	public ResponseEntity<PasswordResetResponse> SendOTP(@RequestBody PasswordResetRequest passwordResetRequest) {
		return twilioOtpService.sendOTPForPasswordReset(passwordResetRequest);
	}

	@PostMapping("/validate")
	public ResponseEntity<Registration> ValidateOTP(@RequestBody PasswordResetRequest passwordResetRequest) {
		return twilioOtpService.validateOTP(passwordResetRequest.getOtp(), passwordResetRequest.getPhonenumber());
	}
}
