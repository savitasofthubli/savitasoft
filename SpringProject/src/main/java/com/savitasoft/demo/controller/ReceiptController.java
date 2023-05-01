package com.savitasoft.demo.controller;


import com.savitasoft.demo.Repository.ReceiptRepository;
import com.savitasoft.demo.model.Receipt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/v1/receipt-controller")
public class ReceiptController {

    @Autowired
    private ReceiptRepository receiptRepository;

    @PostMapping("/addreceipt")
    public Receipt addReceipt(@RequestBody Receipt receipt) {
        return receiptRepository.save(receipt);
    }

    @GetMapping("/receipts")
    public List<Receipt> getAllReceipts()
    {
        return receiptRepository.findAll();
    }
    @GetMapping("/receipt")
    public Receipt getReceipt(@RequestBody Long receiptId)
    {
        return receiptRepository.findById(receiptId).get();
    }

}