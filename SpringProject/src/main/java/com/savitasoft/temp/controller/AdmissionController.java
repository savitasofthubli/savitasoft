package com.savitasoft.temp.controller;

import com.savitasoft.temp.Repository.AdmissionRepository;
import com.savitasoft.temp.model.Admission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admission-controller")
public class AdmissionController {

    @Autowired
    private AdmissionRepository admissionRepository;

    @PostMapping("/add admission")
    public Admission addAdmission(@RequestBody Admission admission) {
        return admissionRepository.save(admission);
    }

    @GetMapping("/admission")
    public Admission getAdmissionById(@RequestBody Long admissionId)
    {
        return admissionRepository.findById(admissionId).get();
    }
    @GetMapping("/admissions")
    public List<Admission> getAllAdmissions(){
        return admissionRepository.findAll();
    }

}
