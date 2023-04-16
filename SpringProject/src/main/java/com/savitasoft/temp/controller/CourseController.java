package com.savitasoft.temp.controller;

import com.savitasoft.temp.Repository.CourseRepository;
import com.savitasoft.temp.model.Course;
import com.savitasoft.temp.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/course-controller")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @PostMapping("/ns/addcourse")
    @PreAuthorize("USER")
    public Course addCourse(@RequestBody Course course)
    {
        return courseService.addCourse(course);
    }

    @GetMapping("/ns/getcourse")
    public Course getCourse(@RequestBody Long courseId)
    {
        return courseService.findCourse(courseId);
    }

    @GetMapping("/ns/courses")
    public List<Course> getAllCourses()
    {
        return courseService.findAll();
    }

}
