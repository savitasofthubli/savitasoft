package com.savitasoft.temp.registration.controller;

import com.savitasoft.temp.registration.model.Registration;
import com.savitasoft.temp.registration.service.RegistrationService;
import com.savitasoft.temp.security.auth.AuthenticationService;
import com.savitasoft.temp.security.auth.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/v1/registration-controller")
public class RegistrationController {

    //You should always have service layer. Modify all code with service layer latter
    @Autowired
    private RegistrationService registrationService;

    @Autowired
    private AuthenticationService authenticationService;
    @PostMapping("/addregister")
    public ResponseEntity<Object> addRegistration(@RequestBody() Registration registration){
        Registration reg = registrationService.addRegistration(registration);
        RegisterRequest request =new RegisterRequest(registration.getPhoneNumber(),registration.getPassword());
        authenticationService.register(request);
        return ResponseEntity.status(org.springframework.http.HttpStatus.CREATED).body(reg);
    }

    @GetMapping("/checkregistration/{data}")
    public ResponseEntity<Boolean> checkRegistrationExist(@PathVariable() String data)
    {
        boolean exist = registrationService.checkRegistrationExist(data,data,data);
        return ResponseEntity.status(HttpStatus.OK).body(exist);
    }

}
