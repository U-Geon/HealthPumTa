package com.healthpumta.service;

import com.healthpumta.controller.form.ExerciseForm;
import com.healthpumta.domain.Exercise;
import com.healthpumta.domain.Member;
import com.healthpumta.domain.Type;
import com.healthpumta.repository.ExerciseRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
class ExerciseServiceTest {

    @Autowired ExerciseService exerciseService;
    @Autowired ExerciseRepository exerciseRepository;
    @Autowired MemberService memberService;

    @Test
    public void 운동_조회() throws Exception {
        // given
        Member member = new Member();
        member.setNickname("ryuGeon");
        memberService.join(member);

        ExerciseForm form = new ExerciseForm();
        form.setName("벤치프레스");
        form.setType(Type.HEALTH);

        Exercise exercise = Exercise.createExercise(member, form.getName(), form.getType());

        // when
        Long target = exerciseService.createExercise(exercise);

        // then

    }

    @Test
    public void 로그인_후_목표_띄우기() throws Exception {
        // given
        Member member = new Member();
        member.setNickname("ryuGeon");

        memberService.join(member);

        // when
        List<Exercise> exercises = exerciseRepository.findByMember(member.getId());

        // then
        Assertions.assertEquals(null, exercises);
    }

    @Test
    public void 운동_조회2() throws Exception {
        // given
        Member member = new Member();
        member.setNickname("ryuGeon");
        memberService.join(member);

        ExerciseForm form = new ExerciseForm();

        form.setName("벤치프레스");
        form.setType(Type.HEALTH);

        Exercise exercise = Exercise.createExercise(member, form.getName(), form.getType());
        Long target = exerciseService.createExercise(exercise);

        // when


        // then
    }
}