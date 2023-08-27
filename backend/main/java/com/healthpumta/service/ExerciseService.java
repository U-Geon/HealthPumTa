package com.healthpumta.service;

import com.healthpumta.domain.Exercise;
import com.healthpumta.domain.Type;
import com.healthpumta.repository.ExerciseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@RequiredArgsConstructor
@Transactional
public class ExerciseService {

    private final ExerciseRepository exerciseRepository;

    // 운동 등록.
    public Long createExercise(Exercise exercise) {
        exerciseRepository.save(exercise);
        return exercise.getId();
    }

    // 운동 수정
    public void editExercise(Long exerciseId, String name, Type type) {
        Exercise findExercise = exerciseRepository.findOne(exerciseId);
        findExercise.setName(name);
        findExercise.setType(type);
        // 세부 목표 수정 기능 추가해야 함.
    }

    // 운동 삭제
    public void deleteExercise(Long exerciseId) {
        exerciseRepository.delete(exerciseId);
    }

    // 운동 조회
    @Transactional(readOnly = true)
    public Exercise findOne(Long exerciseId) {
        return exerciseRepository.findOne(exerciseId);
    }

    // 해당 멤버의 운동 조회
    @Transactional(readOnly = true)
    public List<Exercise> findByMember(Long memberId) {
        return exerciseRepository.findByMember(memberId);
    }


    // 운동 수정
    public void update(Exercise exercise, String name, Type type) {
        exercise.setName(name);
        exercise.setType(type);
    }
}
