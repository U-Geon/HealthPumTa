package com.healthpumta.service;

import com.healthpumta.domain.Exercise;
import com.healthpumta.domain.Goal;
import com.healthpumta.repository.ExerciseRepository;
import com.healthpumta.repository.GoalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class GoalService {
    private final GoalRepository goalRepository;

    // 세부 목표 조회
    public List<Goal> findAll(Exercise exercise) {
        return goalRepository.findAll();
    }

    // 세부 목표 추가
    @Transactional
    public void createGoal(Exercise exercise, String name) {
        Goal goal = Goal.createGoal(exercise, name);
        goalRepository.save(goal);
    }
}
