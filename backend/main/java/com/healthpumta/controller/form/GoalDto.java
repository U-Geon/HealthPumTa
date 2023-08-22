package com.healthpumta.controller.form;

import com.healthpumta.domain.Goal;
import lombok.Data;

@Data
public class GoalDto {
    private String name;

    public GoalDto() {
    }

    public GoalDto(Goal g) {
        name = g.getName();
    }
}
