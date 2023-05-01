package com.savitasoft.demo.otpConfig;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "twilio")
@Data
public class TwilioConfig {

	private String accountSid;
	private String authToken;
	private String trailNumber = "+17628891424";

}
