package com.savitasoft.demo.model;

import com.savitasoft.demo.registration.model.Registration;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "admission")
public class Admission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "date", nullable = false)
    java.sql.Date date = new java.sql.Date(System.currentTimeMillis());

    @Column(name = "fees_paid", nullable = false)
    private Integer feesPaid;

    @ManyToOne
    @JoinColumn(name = "batch_id", nullable = false)
    private Batch batch;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "registration_id")
    private Registration registration;

}