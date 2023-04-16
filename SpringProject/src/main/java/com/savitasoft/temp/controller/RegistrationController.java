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
@RequestMapping("/api/v1/registration-controller")
public class RegistrationController {

    //You should always have service layer. Modify all code with service layer latter
    @Autowired
    private RegistrationService registrationService;

    @PostMapping("/ns/register")
    public Registration postRegister(@RequestBody Registration registration)
    {
        return registrationService.addregistration(registration);
    }
    @GetMapping("/registrations")
    public List<Registration> getAllRegistrations()
    {
        return registrationService.findAll();
    }
    @GetMapping("/ns/registration/{phoneNumber}")
    public ResponseEntity<Registration> getRegistrationByPhoneNumber(@PathVariable() String phoneNumber)
    {
        if(registrationService.getRegistrationByPhoneNumber(phoneNumber).isPresent())
            return ResponseEntity.ok(registrationService.getRegistrationByPhoneNumber(phoneNumber).get());
        else
            return ResponseEntity.status(HttpStatus.SC_NOT_FOUND).build();
    }

}
