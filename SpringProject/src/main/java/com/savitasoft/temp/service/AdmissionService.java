package com.savitasoft.temp.service;

import com.savitasoft.temp.Repository.AdmissionRepository;
import com.savitasoft.temp.model.Receipt;
import com.savitasoft.temp.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdmissionService {
    @Autowired
    AdmissionRepository admissionRepository;
    public Integer getTotalAmountPaid(Long admId)
    {
        Integer sum=0;
        List<Receipt> receipts = admissionRepository.findById(admId).get().getAdmissionReceipts();
        for(Receipt n :receipts)
        {
            sum =sum+n.getReceiptAmountPaid();
        }
        //admissionRepository.findById(admId).get().setFeesPaid(sum);
        return sum;
    }
}
