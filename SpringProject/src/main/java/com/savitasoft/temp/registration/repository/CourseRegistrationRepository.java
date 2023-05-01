package com.savitasoft.temp.Registration.repository;

import com.savitasoft.SavitaSoftServer.Registration.model.CourseRegistration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRegistrationRepository extends JpaRepository<CourseRegistration,Long> {
}
