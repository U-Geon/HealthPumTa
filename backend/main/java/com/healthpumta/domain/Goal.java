package com.healthpumta.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Entity
@Getter @Setter
public class Goal {

    @Id @GeneratedValue
    private Long id;
    private String name;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;

    public static Goal createGoal(Exercise exercise, String name) {
        Goal goal = new Goal();
        goal.setExercise(exercise);
        goal.setName(name);
        return goal;
    }
}
