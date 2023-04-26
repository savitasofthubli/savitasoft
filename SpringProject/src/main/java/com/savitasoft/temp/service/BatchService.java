package com.savitasoft.temp.service;

import com.savitasoft.temp.Repository.BatchRepository;
import com.savitasoft.temp.model.Batch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BatchService {
    @Autowired
    private BatchRepository batchRepository;

    public Batch addBatch(Batch batch)
    {
        return batchRepository.save(batch);
    }

    public Batch modifyBatch(Batch batch)
    {
        return batchRepository.save(batch);
    }

    public Batch deleteBatch(Batch batch)
    {
        Batch b1=batchRepository.findById(batch.getId()).get();
        batchRepository.delete(batch);
        return b1;
    }

    public Batch findBatch(Long id)
    {
        return batchRepository.findById(id).get();
    }

    public List<Batch> findAll()
    {
        return batchRepository.findAll();
    }

    public List<Batch> findBatchByCourse(Long courseId)
    {
        return batchRepository.findByCourse_Id(courseId);
    }
}
