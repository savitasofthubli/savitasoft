package com.savitasoft.temp.Repository;

import com.savitasoft.temp.model.Batch;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BatchRepository extends JpaRepository<Batch,Long>{
    public List<Batch> findByCourse_Id(Long courseId);
}
