package com.savitasoft.temp.Registration.service;

import com.savitasoft.SavitaSoftServer.Registration.model.Registration;
import com.savitasoft.SavitaSoftServer.Registration.repository.RegistrationRepository;
import com.savitasoft.SavitaSoftServer.customexceptions.RegistrationExist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository repository;

    public Registration addRegistration(Registration registration){
        List<Registration> list = repository.findByPhoneOrEmailOrWhatsapp(registration.getPhone(), registration.getEmail(), registration.getWhatsapp());
        if(!list.isEmpty())
            throw new RegistrationExist(registration);
        return repository.save(registration);
    }

    public Registration getRegistrationById(Long id){
        Optional<Registration> opt = repository.findById(id);
        if(opt.isPresent())
            return opt.get();
        else
            return null;
    }

    public Boolean checkRegistrationExist(String phone, String email, String whatsapp)
    {
        List<Registration> list = repository.findByPhoneOrEmailOrWhatsapp(phone,email,whatsapp);
        if(!list.isEmpty())
            return true; // Registration exist
        else
            return false; //Registration does not exist
    }
}
