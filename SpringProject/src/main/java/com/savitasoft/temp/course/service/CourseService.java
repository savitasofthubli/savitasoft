package com.savitasoft.temp.course.service;

import com.savitasoft.temp.course.repository.CourseRepository;
import com.savitasoft.temp.course.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public Course addCourse(Course course)
    {
        return courseRepository.save(course);
    }

    public Course modifyCourse(Course course)
    {
        return courseRepository.save(course);
    }

    public Course deleteCourse(Course course)
    {
        Course cr=courseRepository.findById(course.getId()).get();
        courseRepository.delete(course);
        return cr;
    }

    public Course findCourse(Long id)
    {
        return courseRepository.findById(id).get();
    }

    public List<Course> findAll()
    {
        return courseRepository.findAll();
    }
}
