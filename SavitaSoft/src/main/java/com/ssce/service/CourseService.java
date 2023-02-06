package com.ssce.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ssce.model.Course;

@Service
public interface CourseService {

	public Course addCourse(Course course);
	public Course editCourse(Course course,Integer cid);
	public Course deleteCourse(Integer cid);
	public Course find(Integer cid);
	public List<Course> findAll();
}
