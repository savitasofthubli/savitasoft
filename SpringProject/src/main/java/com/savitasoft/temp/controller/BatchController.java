package com.savitasoft.temp.controller;

import com.savitasoft.temp.Repository.BatchRepository;
import com.savitasoft.temp.model.Batch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/batch-controller")
public class BatchController {
    @Autowired
    private BatchRepository batchRepository;

    @PostMapping("/addbatch")
    public Batch addBatch(@RequestBody Batch batch)
    {
        return batchRepository.save(batch);
    }
    @GetMapping("/batches")
    public List<Batch> getAllBatches()
    {
        return batchRepository.findAll();
    }
    @GetMapping("/batch")
    public Batch getBatchById(@RequestBody Long batchId)
    {
        return batchRepository.findById(batchId).get();
    }

}
