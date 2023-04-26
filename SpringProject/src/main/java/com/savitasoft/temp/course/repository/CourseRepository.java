package com.savitasoft.temp.course.repository;

import com.savitasoft.temp.course.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course,Long> {

}
