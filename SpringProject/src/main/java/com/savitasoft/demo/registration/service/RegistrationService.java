package com.savitasoft.demo.registration.service;

import com.savitasoft.demo.customexceptions.RegistrationExist;
import com.savitasoft.demo.registration.model.Registration;
import com.savitasoft.demo.registration.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;


    public Registration addRegistration(Registration registration){
        List<Registration> list = registrationRepository.findByPhoneNumberOrEmailOrWhatsappNumber(registration.getPhoneNumber(), registration.getPhoneNumber(), registration.getPhoneNumber());
        if(!list.isEmpty())
            throw new RegistrationExist(registration);
        return registrationRepository.save(registration);
    }

    public Registration getRegistrationById(Long id){
        Optional<Registration> opt = registrationRepository.findById(id);
        if(opt.isPresent())
            return opt.get();
        else
            return null;
    }
    public List<Registration> findAll()
    {
        return registrationRepository.findAll();
    }
    public Boolean checkRegistrationExist(String phone, String email, String whatsapp)
    {
        List<Registration> list = registrationRepository.findByPhoneNumberOrEmailOrWhatsappNumber(phone,email,whatsapp);
        if(!list.isEmpty())
            return true; // Registration exist
        else
            return false; //Registration does not exist
    }
    public Registration findByPhoneNumber(String phonenumber)
    {
        return registrationRepository.findByPhoneNumber(phonenumber);
    }
}
