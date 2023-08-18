package com.healthpumta.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Goal {

    @Id @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;

    private String name;

    // 연관관계 편의 메서드
    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
        exercise.getGoals().add(this);
    }

    public static Goal createGoal(Exercise exercise, String name) {
        Goal goal = new Goal();
        goal.setExercise(exercise);
        goal.setName(name);
        return goal;
    }
}
