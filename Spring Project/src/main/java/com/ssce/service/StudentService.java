package com.ssce.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ssce.model.Student;

@Service
public interface StudentService {

	public Student addStudent(Student student);
	public Student editStudent(Student student,Integer id);
	public Student deleteStudent(Integer id);
	public Student find(Integer id);
	public List<Student> findAll();
}
