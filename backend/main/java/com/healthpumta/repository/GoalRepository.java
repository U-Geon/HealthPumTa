//package com.healthpumta.repository;
//
//import com.healthpumta.domain.Exercise;
//import com.healthpumta.domain.Goal;
//import jakarta.persistence.EntityManager;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//@RequiredArgsConstructor
//public class GoalRepository {
//
//    private final EntityManager em;
//
//    public void save(Goal goal) {
//        em.persist(goal);
//    }
//
//    public Goal findOne(Long id) {
//        return em.find(Goal.class, id);
//    }
//
//
//    public List<Goal> findGoals(Exercise exercise) {
//        return em.createQuery(
//                "select g" +
//                        " from Goal g" +
//                        " join fetch g.exercise e" +
//                        " join fetch e.member m" , Goal.class)
//                .setParameter("exercise", exercise)
//                .getResultList();
//    }
//}
