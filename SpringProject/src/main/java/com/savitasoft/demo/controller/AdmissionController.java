package com.savitasoft.demo.controller;

import com.savitasoft.demo.model.Admission;
import com.savitasoft.demo.service.AdmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://15.206.159.116:4200")

@RestController
@RequestMapping("/api/v1/admission-controller")
public class AdmissionController {

    @Autowired
    private AdmissionService admissionService;

    @PostMapping("/addadmission")
    public Admission addAdmission(@RequestBody Admission admission) {
        return admissionService.addAdmission(admission);
    }

    @GetMapping("/admission/{admissionId}")
    public Admission getAdmissionById(@PathVariable Long admissionId)
    {
        return admissionService.findAdmission(admissionId);
    }
    @GetMapping("/admissions")
    public List<Admission> getAllAdmissions(){
        return admissionService.findAll();
    }

}
