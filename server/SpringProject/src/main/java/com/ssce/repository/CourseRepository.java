package com.ssce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssce.model.Course;


public interface CourseRepository extends JpaRepository<Course,Integer> {

}
