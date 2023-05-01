package com.savitasoft.temp.exceptionhandler;

import com.savitasoft.temp.customexceptions.RegistrationExist;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

 @RestControllerAdvice
 public class RegistrationExceptionHandler extends ResponseEntityExceptionHandler {

     @ExceptionHandler(RegistrationExist.class)
        public ResponseEntity<Object> registrationExistHandler(RegistrationExist registrationExist){
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("This registration already exist : "+registrationExist.getRegistration());
        }
    }
