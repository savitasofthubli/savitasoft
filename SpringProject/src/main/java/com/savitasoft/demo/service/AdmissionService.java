package com.savitasoft.demo.service;


import com.savitasoft.demo.Repository.AdmissionRepository;
import com.savitasoft.demo.model.Admission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdmissionService {
    @Autowired
    private AdmissionRepository admissionRepository;

    public Admission addAdmission(Admission admission)
    {
        return admissionRepository.save(admission);
    }

    public Admission modifyAdmission(Admission admission)
    {
        return admissionRepository.save(admission);
    }

    public Admission deleteAdmission(Admission admission)
    {
        Admission ad=admissionRepository.findById(admission.getId()).get();
        admissionRepository.delete(admission);
        return ad;
    }

    public Admission findAdmission(Long id)
    {
        return admissionRepository.findById(id).get();
    }

    public List<Admission> findAll()
    {
        return admissionRepository.findAll();
    }
}
