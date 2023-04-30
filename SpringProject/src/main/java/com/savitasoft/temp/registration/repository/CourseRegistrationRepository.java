package com.savitasoft.temp.registration.repository;

import com.savitasoft.temp.registration.model.CourseRegistration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRegistrationRepository extends JpaRepository<CourseRegistration,Long> {
}
