package com.ssce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssce.model.Course;
import com.ssce.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService{
	
	@Autowired
	private CourseRepository courserepository;

	@Override
	public Course addCourse(Course course) {
		courserepository.save(course);
		return course;
	}

	@Override
	public Course editCourse(Course Course, Integer cid) {
		courserepository.save(Course);
		return Course;
	}

	@Override
	public Course deleteCourse(Integer id) {
		Course s=courserepository.findById(id).get();
		courserepository.delete(s);
		return s;
	}

	@Override
	public Course find(Integer cid) {
		return courserepository.findById(cid).get();
	}

	@Override
	public List<Course> findAll() {
		return courserepository.findAll();
	}

}
