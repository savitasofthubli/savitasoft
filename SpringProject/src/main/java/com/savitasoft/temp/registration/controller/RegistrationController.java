package com.savitasoft.temp.Registration.controller;

import com.savitasoft.SavitaSoftServer.Registration.model.Registration;
import com.savitasoft.SavitaSoftServer.Registration.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/registration")
@CrossOrigin(origins = "http://localhost:4200")
public class RegistrationController {

    @Autowired
    private RegistrationService service;

    @PostMapping
    public ResponseEntity<Object> addRegistration(@RequestBody() Registration registration){
        Registration reg = service.addRegistration(registration);
        return ResponseEntity.status(HttpStatus.CREATED).body(reg);
    }

    @GetMapping("/checkregistration/{data}")
    public ResponseEntity<Boolean> checkRegistrationExist(@PathVariable() String data)
    {
        boolean exist = service.checkRegistrationExist(data,data,data);
        return ResponseEntity.status(HttpStatus.OK).body(exist);
    }
}
