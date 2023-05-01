package com.savitasoft.temp.Course.service;


import com.savitasoft.temp.Course.model.Course;
import com.savitasoft.temp.Course.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository repository;

    public Course getCourseById(Long id){
        Optional<Course> opt =  repository.findById(id);
        if(opt.isPresent())
            return opt.get();
        else
            return null;
    }

    public List<Course> getAllCourses(){
        return repository.findAll();
    }
}
