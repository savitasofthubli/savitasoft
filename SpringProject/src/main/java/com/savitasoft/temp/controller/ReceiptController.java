package com.savitasoft.temp.controller;

import com.savitasoft.temp.Repository.ReceiptRepository;
import com.savitasoft.temp.model.Receipt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/receipt-controller")
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