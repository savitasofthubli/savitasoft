package com.savitasoft.temp.service;

import com.savitasoft.temp.Repository.RegistrationRepository;
import com.savitasoft.temp.model.Registration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    public Optional<Registration> getRegistrationByPhoneNumber(String phoneNumber){
        return registrationRepository.findByPhoneNumber(phoneNumber);
    }
}
