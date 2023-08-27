package com.healthpumta.controller.form;

import com.healthpumta.domain.Exercise;
import com.healthpumta.domain.Goal;
import com.healthpumta.domain.Type;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Getter @Setter
public class ExerciseForm {
    private String name;
    private Type type;
    private List<GoalDto> goals;

    public ExerciseForm() {
    }

    public ExerciseForm(Exercise exercise) {
        name = exercise.getName();
        type = exercise.getType();
        try {
            goals = exercise.getGoal().stream()
                    .map(GoalDto::new)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            goals = new ArrayList<>();
        }
    }
}

