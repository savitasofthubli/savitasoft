package com.savitasoft.temp.Registration.model;

import com.savitasoft.SavitaSoftServer.Course.model.Course;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="courseregistration")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CourseRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="courseregistrationdate")
    LocalDateTime courseRegistrationDate = LocalDateTime.now();

    @ManyToOne
    Registration registration;

    @ManyToOne
    Course course;

}
