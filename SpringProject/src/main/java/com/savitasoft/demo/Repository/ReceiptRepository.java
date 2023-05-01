package com.savitasoft.demo.Repository;


import com.savitasoft.demo.model.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptRepository extends JpaRepository<Receipt,Long> {
}
