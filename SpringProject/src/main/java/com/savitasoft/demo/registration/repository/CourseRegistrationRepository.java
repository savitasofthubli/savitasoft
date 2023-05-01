package com.savitasoft.demo.registration.repository;

import com.savitasoft.demo.registration.model.CourseRegistration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRegistrationRepository extends JpaRepository<CourseRegistration,Long> {
}
