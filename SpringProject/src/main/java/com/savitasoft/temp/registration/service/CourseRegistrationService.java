package com.savitasoft.temp.Registration.service;


import com.savitasoft.temp.Course.model.Course;
import com.savitasoft.temp.Course.service.CourseService;
import com.savitasoft.temp.Registration.model.CourseRegistration;
import com.savitasoft.temp.Registration.model.Registration;
import com.savitasoft.temp.Registration.repository.CourseRegistrationRepository;
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
        Course course = courseService.getCourseById(courseRegistration.getCourse().getId());
        Registration registration = registrationService.getRegistrationById(courseRegistration.getRegistration().getId());
        courseRegistration.setRegistration(registration);
        courseRegistration.setCourse(course);
        return repository.save(courseRegistration);
    }
}
