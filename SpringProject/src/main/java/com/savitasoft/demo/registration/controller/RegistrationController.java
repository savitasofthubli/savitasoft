package com.savitasoft.demo.registration.controller;

import com.savitasoft.demo.registration.model.Input;
import com.savitasoft.demo.registration.model.Registration;
import com.savitasoft.demo.registration.service.RegistrationService;
import com.savitasoft.demo.security.auth.AuthenticationService;
import com.savitasoft.demo.security.auth.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<Object> addRegistration(@RequestBody() Input input){
        Registration reg = registrationService.addRegistration(input.getRegistration());
        RegisterRequest request =new RegisterRequest(input.getRegistration().getPhoneNumber(),input.getPassword());
        authenticationService.register(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(reg);
    }

    @GetMapping("/checkregistration/{data}")
    public ResponseEntity<Boolean> checkRegistrationExist(@PathVariable() String data)
    {
        boolean exist = registrationService.checkRegistrationExist(data,data,data);
        return ResponseEntity.status(HttpStatus.OK).body(exist);
    }


}
