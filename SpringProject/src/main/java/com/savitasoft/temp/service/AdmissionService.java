package com.savitasoft.temp.service;

import com.savitasoft.temp.Repository.AdmissionRepository;
import com.savitasoft.temp.model.Admission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdmissionService {
    @Autowired
    private AdmissionRepository admissionRepository;


}
