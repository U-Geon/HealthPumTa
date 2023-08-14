//package com.healthpumta.repository;
//
//import com.healthpumta.domain.Exercise;
//import com.healthpumta.domain.Member;
//import jakarta.persistence.EntityManager;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Repository;
//import org.springframework.util.Assert;
//
//import java.util.List;
//
//@Repository
//@RequiredArgsConstructor
//public class ExerciseRepository {
//    private final EntityManager em;
//
//    public void save(Exercise exercise) {
//        em.persist(exercise);
//    }
//
//    public Exercise findOne(Long id) {
//        return em.find(Exercise.class, id);
//    }
//
//    // 미완성
//    public List<Exercise> findAll(Long memberId) {
//        return em.createQuery(
//                "select e from Exercise e" +
//                        " join e.member m" +
//                        " where e.member = :name"
//                        , Exercise.class)
//                .setParameter("name", memberId)
//                .getResultList();
//    }
//
//
//    public void delete(Long exerciseId) {
//        Exercise exercise = em.find(Exercise.class, exerciseId);
//        em.remove(em.contains(exercise) ? exercise : em.merge(exercise));
//    }
//}
