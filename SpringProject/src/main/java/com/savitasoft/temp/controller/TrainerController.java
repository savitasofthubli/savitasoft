package com.savitasoft.temp.controller;

import com.savitasoft.temp.Repository.TrainerRepository;
import com.savitasoft.temp.model.Trainer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.event.ListDataEvent;
import java.util.List;

@RestController
@RequestMapping("/api/v1/trainer-controller")
public class TrainerController {
    @Autowired
    private TrainerRepository trainerRepository;

    @PostMapping("/trainerregister")
    public Trainer registerTrainer(@RequestBody Trainer trainer)
    {
        return trainerRepository.save(trainer);
    }

    @GetMapping("/trainers")
    public List<Trainer> getAllTrainers()
    {
        return trainerRepository.findAll();
    }

    @GetMapping("/trainer")
    public Trainer getTrainer(@RequestBody Long trainerId)
    {
        return trainerRepository.findById(trainerId).get();
    }
}
