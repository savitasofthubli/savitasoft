package com.savitasoft.demo.controller;


import com.savitasoft.demo.otpDto.PasswordResetRequest;
import com.savitasoft.demo.otpDto.PasswordResetResponse;
import com.savitasoft.demo.otpService.TwilioOtpService;
import com.savitasoft.demo.registration.model.Registration;
import com.savitasoft.demo.registration.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://15.206.159.116:4200")
@RestController
@RequestMapping("/api/v1/otp/otp-controller")
public class OtpController {
	@Autowired
	TwilioOtpService twilioOtpService;

	@Autowired
	RegistrationService registrationService;
	@PostMapping("/send")
	public ResponseEntity<PasswordResetResponse> SendOTP(@RequestBody PasswordResetRequest passwordResetRequest) {
		PasswordResetResponse pss=new PasswordResetResponse("DElIVERED","OTP IS 12345");
		return ResponseEntity.ok(pss);
	}

	@PostMapping("/validate")
	public ResponseEntity<Registration> ValidateOTP(@RequestBody PasswordResetRequest passwordResetRequest) {
		return ResponseEntity.ok(registrationService.findByPhoneNumber(passwordResetRequest.getPhonenumber()));
	}
}
