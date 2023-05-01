package com.savitasoft.demo.course.repository;

import com.savitasoft.demo.course.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course,Long> {

}
