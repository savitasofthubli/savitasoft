package com.savitasoft.demo.controller;

import com.savitasoft.demo.commons.Constants;
import com.savitasoft.demo.model.Batch;
import com.savitasoft.demo.service.BatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = Constants.crossOrigins)

@RestController
@RequestMapping("/api/v1/batch-controller")
public class BatchController {
    @Autowired
    private BatchService batchService;

    @PostMapping("/addbatch")
    public Batch addBatch(@RequestBody Batch batch)
    {
        return batchService.addBatch(batch);
    }
    @GetMapping("/batches")
    public List<Batch> getAllBatches()
    {
        return batchService.findAll();
    }
    @GetMapping("/batch/{batchId}")
    public Batch getBatchById(@PathVariable Long batchId)
    {
        return batchService.findBatch(batchId);
    }

    @GetMapping("/getbatch/{courseId}")
    public List<Batch> getBatchByCourse(@PathVariable Long courseId)
    {
        return batchService.findBatchByCourse(courseId);
    }

}
