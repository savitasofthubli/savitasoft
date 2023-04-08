package com.savitasoft.temp.controller;

import com.savitasoft.temp.Repository.RegistrationRepository;
import com.savitasoft.temp.model.Registration;
import com.savitasoft.temp.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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


    @Autowired
    private RegistrationService registrationService;
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
        System.out.println(phoneNumber);
        Optional<Registration> optReg = registrationService.getRegistrationByPhoneNumber(phoneNumber);

         if(optReg.isPresent()) {
             System.out.println("Found : "+optReg.get());
             System.out.println(optReg.get());
             return ResponseEntity.ok(optReg.get());
         }
         else {
             System.out.println("Found ");
             return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
         }

    }

}
