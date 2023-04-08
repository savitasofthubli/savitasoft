package com.savitasoft.temp.controller;

import com.savitasoft.temp.Repository.RegistrationRepository;
import com.savitasoft.temp.model.Registration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @GetMapping("/registration")
    public ResponseEntity<Registration> getRegistrationByPhoneNumber(@RequestBody String phoneNumber)
    {
        System.out.println(phoneNumber);
         if(registrationRepository.findByPhoneNumber(phoneNumber).isPresent())
             return ResponseEntity.ok(registrationRepository.findByPhoneNumber(phoneNumber).get());
         else
             return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }

}
