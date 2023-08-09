<<<<<<< Updated upstream
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
    public void saveExercise(Exercise exercise) {
        exerciseRepository.save(exercise);
    }

    public List<Exercise> findExercises() {
        return exerciseRepository.findAll();
    }

    public Exercise findOne(Long exerciseId) {
        return exerciseRepository.findOne(exerciseId);
    }

    public Exercise findByName(String name) {
        return exerciseRepository.findByName(name);
    }
}
=======
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
    public void saveExercise(Exercise exercise) {
        exerciseRepository.save(exercise);
    }

    public List<Exercise> findExercises() {
        return exerciseRepository.findAll();
    }

    public Exercise findOne(Long exerciseId) {
        return exerciseRepository.findOne(exerciseId);
    }

    public Exercise findByName(String name) {
        return exerciseRepository.findByName(name);
    }
}
>>>>>>> Stashed changes
