package com.savitasoft.temp.registration.service;

import com.savitasoft.temp.course.model.Course;
import com.savitasoft.temp.course.service.CourseService;
import com.savitasoft.temp.registration.model.CourseRegistration;
import com.savitasoft.temp.registration.model.Registration;
import com.savitasoft.temp.registration.repository.CourseRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseRegistrationService {

    @Autowired
    private CourseRegistrationRepository repository;

    @Autowired
    private CourseService courseService;

    @Autowired
    private RegistrationService registrationService;

    public CourseRegistration addCourseRegistration(CourseRegistration courseRegistration){
        Course course = courseService.findCourse(courseRegistration.getCourse().getId());
        Registration registration = registrationService.getRegistrationById(courseRegistration.getRegistration().getId());
        courseRegistration.setRegistration(registration);
        courseRegistration.setCourse(course);
        return repository.save(courseRegistration);
    }
}