package com.savitasoft.temp.customexceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RegistrationExist extends RuntimeException{

    private Registration registration;

}
