package com.savitasoft.temp.controller;

import com.savitasoft.temp.Repository.RegistrationRepository;
import com.savitasoft.temp.model.Registration;
import com.savitasoft.temp.service.RegistrationService;
import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/registration-controller")
public class RegistrationController {

    //You should always have service layer. Modify all code with service layer latter
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
    @GetMapping("/registration/{phoneNumber}")
    public ResponseEntity<Registration> getRegistrationByPhoneNumber(@PathVariable() String phoneNumber)
    {
        if(registrationRepository.findByPhoneNumber(phoneNumber).isPresent())
            return ResponseEntity.ok(registrationRepository.findByPhoneNumber(phoneNumber).get());
        else
            return ResponseEntity.status(HttpStatus.SC_NOT_FOUND).build();

    }

}
