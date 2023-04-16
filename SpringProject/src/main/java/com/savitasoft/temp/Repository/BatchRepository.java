package com.savitasoft.temp.Repository;

import com.savitasoft.temp.model.Batch;
import com.savitasoft.temp.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BatchRepository extends JpaRepository<Batch,Long>{
    public List<Batch> findByCourse_Id(Long courseId);
}
