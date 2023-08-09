<<<<<<< Updated upstream
package com.healthpumta.repository;

import com.healthpumta.domain.Exercise;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

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

    public List<Exercise> findAll() {
        return em.createQuery("select e from Exercise e", Exercise.class)
                .getResultList();
    }

    public Exercise findByName(String name) {
        return em.createQuery("select e from Exercise e where e.name = :name", Exercise.class)
                .setParameter("name", name)
                .getSingleResult();
    }
}
=======
package com.healthpumta.repository;

import com.healthpumta.domain.Exercise;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

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

    public List<Exercise> findAll() {
        return em.createQuery("select e from Exercise e", Exercise.class)
                .getResultList();
    }

    public Exercise findByName(String name) {
        return em.createQuery("select e from Exercise e where e.name = :name", Exercise.class)
                .setParameter("name", name)
                .getSingleResult();
    }
}
>>>>>>> Stashed changes
