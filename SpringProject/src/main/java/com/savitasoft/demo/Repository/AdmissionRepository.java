package com.savitasoft.demo.Repository;


import com.savitasoft.demo.model.Admission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdmissionRepository extends JpaRepository<Admission,Long> {
}
