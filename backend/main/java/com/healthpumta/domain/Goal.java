package com.healthpumta.domain;

import com.healthpumta.controller.form.GoalDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter @Setter
public class Goal {

    @Id @GeneratedValue
    private Long id;
    private String name;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "exercise_id")
    @MapsId
    private Exercise exercise;

    public Goal() {
    }

    public Goal(GoalDto g) {
        this.name = g.getName();
    }

    public static Goal createGoal(Exercise exercise, String name) {
        Goal goal = new Goal();
        goal.setExercise(exercise);
        goal.setName(name);
        return goal;
    }
}
