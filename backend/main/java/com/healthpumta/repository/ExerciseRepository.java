package com.healthpumta.repository;

import com.healthpumta.domain.Exercise;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ExerciseRepository {
    private final EntityManager em;

    public void save(Exercise exercise) {
        em.persist(exercise);
    }

    public Exercise findOne(Long id) {
        return em.find(Exercise.class, id);
    }

    // 해당 멤버의 운동 전체 조회
    public List<Exercise> findByMember(Long memberId) {
        try {
            return em.createQuery(
                    "select e from Exercise e where e.member.id = :id", Exercise.class)
                    .setParameter("id", memberId)
                    .getResultList();
        } catch (NullPointerException e) {
            return new ArrayList<>();
        }
    }

    // 운동 삭제
    public void delete(Long exerciseId) {
        Exercise exercise = em.find(Exercise.class, exerciseId);
        em.remove(em.contains(exercise) ? exercise : em.merge(exercise));
    }
}
