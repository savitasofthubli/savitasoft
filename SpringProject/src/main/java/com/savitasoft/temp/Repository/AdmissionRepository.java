package com.savitasoft.temp.Repository;

import com.savitasoft.temp.model.Admission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdmissionRepository extends JpaRepository<Admission,Long> {
}
