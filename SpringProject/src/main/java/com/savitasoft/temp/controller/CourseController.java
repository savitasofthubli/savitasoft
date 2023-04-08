package com.savitasoft.temp.controller;

import com.savitasoft.temp.Repository.CourseRepository;
import com.savitasoft.temp.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/course-controller")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/add course")
    public Course addCourse(@RequestBody Course course)
    {
        return courseRepository.save(course);
    }

    @GetMapping("/get course")
    public Course getCourse(@RequestBody Long courseId)
    {
        return courseRepository.findById(courseId).get();
    }

    @GetMapping("/courses")
    public List<Course> getAllCourses()
    {
        return courseRepository.findAll();
    }

}
