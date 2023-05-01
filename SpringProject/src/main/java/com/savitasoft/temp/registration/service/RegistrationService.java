package com.savitasoft.temp.registration.service;

import com.savitasoft.temp.registration.repository.RegistrationRepository;
import com.savitasoft.temp.customexceptions.RegistrationExist;
import com.savitasoft.temp.registration.model.Registration;
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
}
