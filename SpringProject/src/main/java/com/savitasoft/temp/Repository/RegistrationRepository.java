package com.savitasoft.temp.Repository;

import com.savitasoft.temp.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<Registration,Long> {
}
