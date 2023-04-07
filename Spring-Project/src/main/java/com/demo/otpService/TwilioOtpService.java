package com.demo.otpService;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.demo.otpConfig.TwilioConfig;
import com.demo.otpDto.PasswordResetRequest;
import com.demo.otpDto.PasswordResetResponse;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;


@Service
public class TwilioOtpService {
	@Autowired
	private TwilioConfig twilioConfig;
	
	Map<String,String> otpMap= new HashMap<>();
	
	private String otp,otpMessage;
	public ResponseEntity<PasswordResetResponse> sendOTPForPasswordReset(PasswordResetRequest passwordResetRequest) {
		
		PasswordResetResponse passwordResetResponse = new PasswordResetResponse();
//		try {
		PhoneNumber to = new PhoneNumber(passwordResetRequest.getUsername());
		PhoneNumber from = new PhoneNumber("+17628891424");
		otp = generateOTP();
		otpMessage = "Dear customer, use this One Time Password (" + otp + ") to log in to your savitasoft account. This OTP will be valid for the next 5 mins.";
		Message message = Message.creator(
                to,from,
                otpMessage)
            .create();
		otpMap.put(passwordResetRequest.getUsername(), otp);
		passwordResetResponse.setOtpStatus("DELIVERED");
		passwordResetResponse.setMessage(otpMessage);
//		}
//		catch(Exception e)
//		{
//			passwordResetResponse.setOtpStatus("FAILED");
//			passwordResetResponse.setMessage(otpMessage);
//			return ResponseEntity.status(HttpStatus.SC_CONFLICT).build();
//		}
		return ResponseEntity.ok(passwordResetResponse);
		
		
	}
	
	public ResponseEntity<String> validateOTP(String userInputOtp,String userName)
	{
		if(userInputOtp.equals(otpMap.get(userName)))
			return ResponseEntity.ok("Valid OTP!");
		else
			return ResponseEntity.status(HttpStatus.SC_UNAUTHORIZED).build();
		
	}
	
	private String generateOTP()
	{
		return new DecimalFormat("000000")
				.format(new Random().nextInt(999999));
	}

}
