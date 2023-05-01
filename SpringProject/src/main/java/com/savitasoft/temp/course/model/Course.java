package com.savitasoft.temp.Course.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

@Entity
@Table(name="course")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="coursename", length = 50)
    @NotNull
    @UniqueElements
    private String courseName;

    @Column(name="fees")
    @Min(0)
    @Max(100000)
    private Integer fees;


    @Column(name="duration", precision = 2)
    @NotNull
    @Min(0)
    private Float duration;

}
