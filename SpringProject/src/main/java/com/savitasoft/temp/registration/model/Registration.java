package com.savitasoft.temp.Registration.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name="registration")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Registration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="registrationdate")
    private LocalDateTime registrationDate =  LocalDateTime.now();

    @Column(name="name", length = 100)
    private String name;

    @Column(name="phone", length = 20)
    private String phone;

    @Column(name="email", length = 50)
    private String email;

    @Column(name="address", length = 255)
    private String address;

    @Column(name="whatsapp", length = 20)
    private String whatsapp;

    @Column(name="college", length = 100)
    private String college;

    @Column(name="branch", length = 25)
    private String branch;

    @Column(name="semester")
    private Integer semester;

    @Column(name="password", length = 50)
    private String password;
}
