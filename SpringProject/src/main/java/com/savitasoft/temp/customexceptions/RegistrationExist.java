package com.savitasoft.temp.customexceptions;

import com.savitasoft.temp.registration.model.Registration;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RegistrationExist extends RuntimeException{

    private Registration registration;

}
