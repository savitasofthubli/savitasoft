package com.ssce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssce.model.Student;
import com.ssce.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	private StudentRepository studentrepository;
	
	@Autowired
	private com.ssce.repository.CourseRepository courserepository;

	@Override
	public Student addStudent(Student student) {
		student.setCourse(courserepository.findById(student.getCourse().getCid()).get());

		studentrepository.save(student);
		return student;
	}

	@Override
	public Student editStudent(Student student, Integer id) {
		student.setCourse(courserepository.findById(student.getCourse().getCid()).get());
		studentrepository.save(student);
		return student;
	}

	@Override
	public Student deleteStudent(Integer id) {
		Student s=studentrepository.findById(id).get();
		studentrepository.delete(s);
		return s;
	}

	@Override
	public Student find(Integer id) {
		return studentrepository.findById(id).get();
	}

	@Override
	public List<Student> findAll() {
		return studentrepository.findAll();
	}

}
