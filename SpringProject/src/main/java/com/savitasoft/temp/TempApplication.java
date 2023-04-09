package com.savitasoft.temp;

import com.savitasoft.temp.Repository.RegistrationRepository;
import com.savitasoft.temp.model.Registration;
import com.savitasoft.temp.otpConfig.TwilioConfig;
import com.twilio.Twilio;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.Optional;

@SpringBootApplication
public class TempApplication {

	@Autowired
	private TwilioConfig twilioConfig;

	@PostConstruct
	public void initTwilio()
	{
		Twilio.init(twilioConfig.getAccountSid(), twilioConfig.getAuthToken());
	}

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(TempApplication.class, args);
		RegistrationRepository repo = context.getBean("registrationRepository",RegistrationRepository.class);
		Optional<Registration> opt = repo.findByPhoneNumber("9900335766");
		System.out.println(opt.get());

	}

}
