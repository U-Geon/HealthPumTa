package com.healthpumta.service;

import com.healthpumta.controller.form.ExerciseForm;
import com.healthpumta.domain.Exercise;
import com.healthpumta.domain.Goal;
import com.healthpumta.domain.Member;
import com.healthpumta.repository.ExerciseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@RequiredArgsConstructor
public class ExerciseService {

    private final MemberService memberService;
    private final ExerciseRepository exerciseRepository;
    private final GoalService goalService;

    // 운동 등록.
    @Transactional
    public Long createExercise(Exercise exercise) {
        exerciseRepository.save(exercise);
        return exercise.getId();
    }

    // 운동 수정
    @Transactional
    public void editExercise(Long exerciseId, ExerciseForm form) {
        Exercise findExercise = exerciseRepository.findOne(exerciseId);
        findExercise.setName(form.getName());
        findExercise.setType(form.getType());
        // 세부 목표 수정 기능 추가해야 함.
    }

    // 운동 삭제
    @Transactional
    public void deleteExercise(Long exerciseId) {
        exerciseRepository.delete(exerciseId);
    }

    // 운동 조회
    @Transactional(readOnly = true)
    public Exercise findOne(Long exerciseId) {
        return exerciseRepository.findOne(exerciseId);
    }
}
