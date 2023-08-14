package com.healthpumta.controller.form;

import com.healthpumta.domain.Goal;
import lombok.Getter;

@Getter
public class GoalDto {
    private String goal;
    public GoalDto(Goal goal) {
        this.goal = goal.getName();
    }
}
