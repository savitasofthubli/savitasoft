package com.savitasoft.temp.otpService;

import com.savitasoft.temp.registration.repository.RegistrationRepository;
import com.savitasoft.temp.registration.model.Registration;
import com.savitasoft.temp.otpConfig.TwilioConfig;
import com.savitasoft.temp.otpDto.PasswordResetRequest;
import com.savitasoft.temp.otpDto.PasswordResetResponse;
import com.twilio.exception.TwilioException;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;


@Service
public class TwilioOtpService {
	@Autowired
	private TwilioConfig twilioConfig;
	@Autowired
	private RegistrationRepository registrationRepository;
	
	Map<String,String> otpMap= new HashMap<>();
	
	private String otp,otpMessage;
	public ResponseEntity<PasswordResetResponse> sendOTPForPasswordReset(PasswordResetRequest passwordResetRequest) {
		
		PasswordResetResponse passwordResetResponse = new PasswordResetResponse();
		try {
		PhoneNumber to = new PhoneNumber("+91"+passwordResetRequest.getPhonenumber());
		PhoneNumber from = new PhoneNumber(twilioConfig.getTrailNumber());
		otp = generateOTP();
		otpMessage = "Dear customer, use this One Time Password (" + otp + ") to log in to your savitasoft account. This OTP will be valid for the next 5 mins.";
		Message message = Message.creator(
                to,from,
                otpMessage)
            .create();
		otpMap.put(passwordResetRequest.getPhonenumber(), otp);
		passwordResetResponse.setOtpStatus("DELIVERED");
		passwordResetResponse.setMessage(otpMessage);
		}catch(TwilioException te){
			passwordResetResponse.setOtpStatus("FAILED");
			passwordResetResponse.setMessage(otpMessage);
			return ResponseEntity.status(HttpStatus.SC_CONFLICT).build();
		}
		return ResponseEntity.ok(passwordResetResponse);
		
		
	}
	
	public ResponseEntity<Registration> validateOTP(String userInputOtp, String userName)
	{
		if(userInputOtp.equals( otpMap.get(userName)))
		{
			if(registrationRepository.findByPhoneNumber(userName).isPresent())
				return ResponseEntity.ok(registrationRepository.findByPhoneNumber(userName).get());
			else
				return ResponseEntity.status(HttpStatus.SC_NOT_FOUND).build();
		}
		else
			return ResponseEntity.status(HttpStatus.SC_UNAUTHORIZED).build();
		
	}
	
	private String generateOTP()
	{
		return new DecimalFormat("000000")
				.format(new Random().nextInt(999999));
	}

}
