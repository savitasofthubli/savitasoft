package com.savitasoft.demo.registration.model;

import com.savitasoft.demo.course.model.Course;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "registration")
public class Registration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "date", nullable = false)
    Date date = new Date(System.currentTimeMillis());

    @Column(name = "name", nullable = false)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String name;

    @Column(name = "phoneNumber", nullable = false, unique = true)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String phoneNumber;

    @Column(name = "whatsapp_number", nullable = false, unique = true)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String whatsappNumber;

    @Column(name = "college", nullable = false)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String college;

    @Column(name = "branch", nullable = false)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String branch;

    @Column(name = "semester", nullable = false)
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Integer semester;

    @Column(name = "address", nullable = false)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String address;

    @Column(name = "email", nullable = false)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String email;

    @Column(name = "parent_number", nullable = false)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private String parentNumber;
}