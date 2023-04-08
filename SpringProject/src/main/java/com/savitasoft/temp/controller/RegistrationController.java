package com.savitasoft.temp.controller;

import com.savitasoft.temp.Repository.RegistrationRepository;
import com.savitasoft.temp.model.Registration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registration-controller")
public class RegistrationController {

    @Autowired
    private RegistrationRepository registrationRepository;
    @PostMapping("/register")
    public Registration register(@RequestBody Registration registration)
    {
        return registrationRepository.save(registration);
    }
    @GetMapping("/registrations")
    public List<Registration> getAllRegistrations()
    {
        return registrationRepository.findAll();
    }

}
