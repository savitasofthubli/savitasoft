package com.savitasoft.temp.Repository;

import com.savitasoft.temp.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RegistrationRepository extends JpaRepository<Registration,Long> {
        Optional<Registration> findByPhoneNumber(Long phoneNumber);
}
