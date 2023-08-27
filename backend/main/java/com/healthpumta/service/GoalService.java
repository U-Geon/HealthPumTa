package com.healthpumta.service;

import com.healthpumta.domain.Exercise;
import com.healthpumta.domain.Goal;
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

    // 세부 목표 전부 조회
    public List<Goal> findGoalsByExercise(Long exerciseId) {
        return goalRepository.findByExercise(exerciseId);
    }

    // 세부 목표 추가
    @Transactional
    public Long createGoal(Exercise exercise, String name) {
        Goal goal = Goal.createGoal(exercise, name);
        goalRepository.save(goal);
        return goal.getId();
    }

    // 세부 목표 전부 삭제
    @Transactional
    public int deleteAllByExercise(Long exerciseId) {
        return goalRepository.deleteAllByExercise(exerciseId);
    }
}
