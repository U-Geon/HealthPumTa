package com.healthpumta.service;

import com.healthpumta.controller.form.GoalDto;
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

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
@RunWith(SpringRunner.class)
@Transactional
class GoalServiceTest {
    @Autowired GoalService goalService;
    @Autowired MemberService memberService;
    @Autowired ExerciseService exerciseService;

    @Test
    @Rollback(value = false)
    public void 목표_추가() throws Exception {
        // given
        Member member = new Member();
        member.setNickname("geon");

        Exercise exercise = new Exercise();
        exercise.setMember(member);
        exercise.setName("벤치프레스");
        exercise.setType(Type.HEALTH);

        memberService.join(member);
        exerciseService.createExercise(exercise);
        goalService.createGoal(exercise,"20kg 5x5");

        // when
        List<GoalDto> goalDtos = new ArrayList<>();
        GoalDto goalDto1 = new GoalDto();
        goalDto1.setName("20kg 5x5");
        goalDtos.add(goalDto1);

        GoalDto goalDto2 = new GoalDto();
        goalDto2.setName("30kg 5x5");
        goalDtos.add(goalDto2);

        // when
        exerciseService.update(exercise, "벤치프레스", Type.HEALTH);
        goalService.deleteAllByExercise(exercise.getId());

        for (GoalDto goal : goalDtos) {
            goalService.createGoal(exercise, goal.getName());
        }
    }

    @Test
    @Rollback(value = false)
    public void 목표_삭제() throws Exception {
        // given
        Member member = new Member();
        member.setNickname("geon");

        Exercise exercise = new Exercise();
        exercise.setMember(member);
        exercise.setName("벤치프레스");
        exercise.setType(Type.HEALTH);


        memberService.join(member);
        exerciseService.createExercise(exercise);
        goalService.createGoal(exercise,"20kg 5x5");
        goalService.createGoal(exercise,"30kg 5x5");

        List<GoalDto> goalDtos = new ArrayList<>();
        GoalDto goalDto1 = new GoalDto();
        goalDto1.setName("20kg 5x5");
        goalDtos.add(goalDto1);

        // when
        exerciseService.update(exercise, "벤치프레스", Type.HEALTH);
        goalService.deleteAllByExercise(exercise.getId());

        for (GoalDto goal : goalDtos) {
            goalService.createGoal(exercise, goal.getName());
        }

        // then
    }

}