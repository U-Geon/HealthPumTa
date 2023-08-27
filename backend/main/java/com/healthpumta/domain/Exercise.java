package com.healthpumta.domain;

import com.healthpumta.controller.form.ExerciseForm;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Entity
@Getter @Setter
public class Exercise {

    @Id @GeneratedValue
    private Long id;

    @Enumerated(EnumType.STRING)
    private Type type;

    @Column(unique = true)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "exercise", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Goal> goal = new ArrayList<>();

    public static Exercise createExercise(Member member, String name, Type type) {
        Exercise exercise = new Exercise();
        exercise.setMember(member);
        exercise.setName(name);
        exercise.setType(type);

        return exercise;
    }
}
