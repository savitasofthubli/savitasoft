package com.savitasoft.temp.Repository;

import com.savitasoft.temp.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course,Long> {

}
