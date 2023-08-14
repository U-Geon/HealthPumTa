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

    private String goal;

    // 생성 메서드
    public static Goal createGoal(String text) {
        Goal tmp = new Goal();
        tmp.setGoal(text);
        return tmp;
    }

    // 연관관계 편의 메서드
    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
        exercise.getGoals().add(this);
    }
}
