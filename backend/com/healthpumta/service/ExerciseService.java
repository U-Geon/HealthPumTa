package com.healthpumta.service;

import com.healthpumta.domain.Exercise;
import com.healthpumta.repository.ExerciseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ExerciseService {

    private final ExerciseRepository exerciseRepository;

    // 운동 등록.
    @Transactional
    public Long saveExercise(Exercise exercise) {
        exerciseRepository.save(exercise);
        return exercise.getId();
    }

    public List<Exercise> findExercises() {
        return exerciseRepository.findAll();
    }

    public Exercise findOne(Long exerciseId) {
        return exerciseRepository.findOne(exerciseId);
    }

    public List<Exercise> findByName(String name) {
        return exerciseRepository.findByName(name);
    }
}
