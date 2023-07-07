package com.savitasoft.demo.model;

import com.savitasoft.demo.course.model.Course;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "batch")
public class Batch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @Column(name = "start_date", nullable = false)
    private String startDate;

    @Column(name = "session_duration", nullable = false)
    private String sessionDuration;

    @Column(name = "no_of_seats", nullable = false)
    private Integer noOfSeats;

    @Column(name = "start_time", nullable = false)
    private String startTime;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @ManyToOne
    @JoinColumn(name = "trainer_id", nullable = false)
    private Trainer trainer;

}