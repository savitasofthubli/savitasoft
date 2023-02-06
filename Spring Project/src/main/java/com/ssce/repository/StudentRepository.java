package com.ssce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssce.model.Student;


public interface StudentRepository extends JpaRepository<Student,Integer> {

}
