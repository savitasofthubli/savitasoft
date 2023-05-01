package com.savitasoft.temp.registration.controller;

import com.savitasoft.temp.registration.model.CourseRegistration;
import com.savitasoft.temp.registration.service.CourseRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/courseregistration")
@CrossOrigin(origins = "http://localhost:4200")
public class CourseRegistrationController {

    @Autowired
    private CourseRegistrationService service;

    @PostMapping
    public ResponseEntity<Object> addCourseRegistration(@RequestBody() CourseRegistration courseRegistration){
        System.out.println("Course that is registered for : "+courseRegistration);
        CourseRegistration cr = service.addCourseRegistration(courseRegistration);
        return ResponseEntity.status(HttpStatus.CREATED).body(cr);
    }
}
