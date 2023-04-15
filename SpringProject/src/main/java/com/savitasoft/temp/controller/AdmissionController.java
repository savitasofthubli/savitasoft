package com.savitasoft.temp.controller;

import com.savitasoft.temp.Repository.AdmissionRepository;
import com.savitasoft.temp.model.Admission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/admission-controller")
public class AdmissionController {

    @Autowired
    private AdmissionRepository admissionRepository;

    @PostMapping("/addadmission")
    public Admission addAdmission(@RequestBody Admission admission) {
        return admissionRepository.save(admission);
    }

    @GetMapping("/admission/{admissionId}")
    public Admission getAdmissionById(@PathVariable Long admissionId)
    {
        return admissionRepository.findById(admissionId).get();
    }
    @GetMapping("/admissions")
    public List<Admission> getAllAdmissions(){
        return admissionRepository.findAll();
    }

}
