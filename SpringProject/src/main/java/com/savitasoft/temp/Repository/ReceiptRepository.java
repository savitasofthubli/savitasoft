package com.savitasoft.temp.Repository;

import com.savitasoft.temp.model.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptRepository extends JpaRepository<Receipt,Long> {
}
