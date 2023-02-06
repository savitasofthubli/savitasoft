package com.ssce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssce.model.Course;
import com.ssce.model.Student;
import com.ssce.service.CourseService;
import com.ssce.service.StudentService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class SavitaSoftController {
	
	@Autowired
	StudentService studentservice;
	
	@Autowired
	CourseService courseservice;
	
	@GetMapping("/savitasoft")
	public List<Student> addStudent()
	{
		return studentservice.findAll();
	}
	
	@PostMapping("/savitasoft")
	public Student addStudent(@RequestBody() Student student)
	{
		return studentservice.addStudent(student);
	}
	
	@GetMapping("/course")
	public List<Course> Course()
	{
		return courseservice.findAll();
	}
	@PostMapping("/addcourse")
	public Course addCourse(@RequestBody() Course course)
	{
		return courseservice.addCourse(course);
	}

}
