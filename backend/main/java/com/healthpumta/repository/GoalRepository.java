package com.healthpumta.repository;

import com.healthpumta.domain.Goal;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class GoalRepository {
    private final EntityManager em;

    public void save(Goal goal) {
        if(goal.getId() == null) {
            em.persist(goal);
        } else {
            em.merge(goal);
        }
    }

    public Goal findOnd(Long id) {
        return em.find(Goal.class, id);
    }

    // 운동에 대한 세부 목표 조회
    public List<Goal> findByExercise(Long exerciseId) {
        try {
            return em.createQuery(
                    "select g from Goal where exercise = :exerciseId", Goal.class)
                    .setParameter("exerciseId", exerciseId)
                    .getResultList();
        } catch (NullPointerException e) {
            return new ArrayList<>();
        }
    }
    // 특정 운동에 대한 목표 전부 삭제
    public int deleteAllByExercise(Long exerciseId) {
        // 몇 개 엔티티 삭제했는지 리턴.
        return em.createNativeQuery("delete from Goal g where g.exercise_id = :exerciseId")
                .setParameter("exerciseId", exerciseId)
                .executeUpdate();
    }

    // 목표 삭제
    @Transactional
    public void delete(Goal goal) {
        em.remove(em.contains(goal) ? goal : em.merge(goal));
    }
}
