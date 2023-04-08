package com.savitasoft.temp.Repository;

import com.savitasoft.temp.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Long> {
}
