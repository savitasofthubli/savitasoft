package com.savitasoft.demo.registration.repository;

import com.savitasoft.demo.registration.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RegistrationRepository extends JpaRepository<Registration,Long> {

       public List<Registration> findByPhoneNumberOrEmailOrWhatsappNumber(String phonenumber,String whatsappnumber,String email);
       public Registration findByPhoneNumber(String phonenumber);
}