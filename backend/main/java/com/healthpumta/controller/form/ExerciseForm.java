package com.healthpumta.controller.form;

import com.healthpumta.domain.Exercise;
import com.healthpumta.domain.Goal;
import com.healthpumta.domain.Member;
import com.healthpumta.domain.Type;
import com.healthpumta.service.GoalService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Getter @Setter
public class ExerciseForm {
    private String name;
    private Type type;
    private List<GoalDto> goals = new ArrayList<>();

    public ExerciseForm() {
    }

    public ExerciseForm(Exercise exercise) {
        name = exercise.getName();
        type = exercise.getType();
        goals = exercise.getGoal().stream()
                .map(g -> new GoalDto(g))
                .collect(Collectors.toList());
    }
}
