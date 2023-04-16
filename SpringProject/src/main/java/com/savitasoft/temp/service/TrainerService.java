package com.savitasoft.temp.service;

import com.savitasoft.temp.Repository.CourseRepository;
import com.savitasoft.temp.Repository.TrainerRepository;
import com.savitasoft.temp.model.Course;
import com.savitasoft.temp.model.Trainer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainerService {
    @Autowired
    private TrainerRepository trainerRepository;

    public Trainer addTrainer(Trainer trainer)
    {
        return trainerRepository.save(trainer);
    }

    public Trainer modifyTrainer(Trainer trainer)
    {
        return trainerRepository.save(trainer);
    }

    public Trainer deleteTrainer(Trainer trainer)
    {
        Trainer tr=trainerRepository.findById(trainer.getId()).get();
        trainerRepository.delete(trainer);
        return tr;
    }

    public Trainer findTrainer(Long id)
    {
        return trainerRepository.findById(id).get();
    }

    public List<Trainer> findAll()
    {
        return trainerRepository.findAll();
    }
}
