package com.savitasoft.temp.controller;

import com.savitasoft.temp.Repository.CourseRepository;
import com.savitasoft.temp.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/course-controller")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/addcourse")
    @PreAuthorize("USER")
    public Course addCourse(@RequestBody Course course)
    {
        return courseRepository.save(course);
    }

    @GetMapping("/ns/getcourse")
    public Course getCourse(@RequestBody Long courseId)
    {
        return courseRepository.findById(courseId).get();
    }

    @GetMapping("/ns/courses")
    public List<Course> getAllCourses()
    {
        return courseRepository.findAll();
    }

}
