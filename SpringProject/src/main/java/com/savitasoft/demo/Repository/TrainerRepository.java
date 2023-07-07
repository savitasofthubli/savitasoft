package com.savitasoft.demo.Repository;


import com.savitasoft.demo.model.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainerRepository extends JpaRepository<Trainer,Long> {
}
