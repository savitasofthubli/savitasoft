package com.savitasoft.demo.customexceptions;

import com.savitasoft.demo.registration.model.Registration;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RegistrationExist extends RuntimeException{

    private Registration registration;

}
