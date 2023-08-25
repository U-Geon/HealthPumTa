package com.healthpumta.repository;

import com.healthpumta.domain.Exercise;
import com.healthpumta.domain.Goal;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class GoalRepository {
    private final EntityManager em;

    public void save(Goal goal) {
        em.persist(goal);
    }

    public Goal findOnd(Long id) {
        return em.find(Goal.class, id);
    }

    // 운동에 대한 세부 목표 조회
    public List<Goal> findByExercise(Long memberId) {
        try {
            return em.createQuery(
                    "select e from Exercise e" +
                            " join fetch Goal g" +
                            " where e.member.id = :memberId", Goal.class)
                    .setParameter("memberId", memberId)
                    .getResultList();
        } catch (NullPointerException e) {
            return new ArrayList<>();
        }
    }

    // 목표 삭제
    public void delete(Long goalId) {
        Goal goal = em.find(Goal.class, goalId);
        em.remove(em.contains(goal) ? goal : em.merge(goal));
    }
}
