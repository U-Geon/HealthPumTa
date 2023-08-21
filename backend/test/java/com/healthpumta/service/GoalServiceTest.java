package com.healthpumta.service;

import com.healthpumta.controller.form.ExerciseForm;
import com.healthpumta.domain.Exercise;
import com.healthpumta.domain.Member;
import com.healthpumta.domain.Type;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@RunWith(SpringRunner.class)
@Transactional

class GoalServiceTest {
    @Autowired GoalService goalService;

//    Member member = new Member();
//        member.setNickname("geon");
//
//    ExerciseForm form = new ExerciseForm();
//        form.setName("벤치");
//        form.setType(Type.HEALTH);
//
//    Exercise exercise = Exercise.createExercise(member, form);

    @Test
    public void 목표_추가() throws Exception {
        // given
        Member member = new Member();
        member.setNickname("geon");

        ExerciseForm form = new ExerciseForm();
        form.setName("벤치");
        form.setType(Type.HEALTH);

        Exercise exercise = Exercise.createExercise(member, form.getName(), form.getType());

        // when
        goalService.createGoal(exercise, "50kg 5x5");

        // then
    }
}