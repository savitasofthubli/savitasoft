package com.savitasoft.temp.service;

import com.savitasoft.temp.Repository.RegistrationRepository;
import com.savitasoft.temp.model.Admission;
import com.savitasoft.temp.model.Registration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    public Optional<Registration> getRegistrationByPhoneNumber(String phoneNumber){
        return registrationRepository.findByPhoneNumber(phoneNumber);
    }

    public Registration addregistration(Registration registration)
    {
        return registrationRepository.save(registration);
    }

    public Registration modifyregistration(Registration registration)
    {
        return registrationRepository.save(registration);
    }

    public Registration deleteregistration(Registration registration)
    {
        Registration reg=registrationRepository.findById(registration.getId()).get();
        registrationRepository.delete(registration);
        return reg;
    }

    public Registration findregistration(Long id)
    {
        return registrationRepository.findById(id).get();
    }

    public List<Registration> findAll()
    {
        return registrationRepository.findAll();
    }
}
