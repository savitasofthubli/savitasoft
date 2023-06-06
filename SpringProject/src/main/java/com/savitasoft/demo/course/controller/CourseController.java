package com.savitasoft.demo.course.controller;

import com.savitasoft.demo.course.model.Course;
import com.savitasoft.demo.course.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://15.206.159.116:4200")
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
