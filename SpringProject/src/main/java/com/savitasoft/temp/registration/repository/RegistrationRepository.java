package com.savitasoft.temp.Registration.repository;

import com.savitasoft.SavitaSoftServer.Registration.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RegistrationRepository extends JpaRepository<Registration,Long> {
    public List<Registration> findByPhoneOrEmailOrWhatsapp(String phone,String email,String whatsapp);
}
