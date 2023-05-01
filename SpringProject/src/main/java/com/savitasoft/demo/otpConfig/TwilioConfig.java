package com.savitasoft.demo.otpConfig;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "twilio")
@Data
public class TwilioConfig {

	private String accountSid;
	private String authToken="aa0181bbc8cdddfd1223e8bea2fc3d64";
	private String trailNumber = "+17628891424";

}
