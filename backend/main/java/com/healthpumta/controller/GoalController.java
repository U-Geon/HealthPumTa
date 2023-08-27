package com.healthpumta.controller;

import com.healthpumta.controller.form.ExerciseForm;
import com.healthpumta.controller.form.GoalDto;
import com.healthpumta.domain.Exercise;
import com.healthpumta.domain.Member;
import com.healthpumta.service.ExerciseService;
import com.healthpumta.service.GoalService;
import com.healthpumta.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/goal")
@RequiredArgsConstructor
public class GoalController {
    private final MemberService memberService;
    private final ExerciseService exerciseService;
    private final GoalService goalService;

    // 목표 페이지
    @GetMapping
    public List<ExerciseForm> exercise(HttpServletRequest request) {
        // 로그인 정보 가져와서 연결하기.
        Long id = SessionConfig.sessionMemberId(request);
        try {
            return exerciseService.findByMember(id).stream()
                    .map(e -> new ExerciseForm(e)).collect(Collectors.toList());
        } catch (Exception e) {
            return new ArrayList<>();
        }
    }


    // 목표 추가
    @PostMapping("/new")
    public String create(@RequestBody ExerciseForm form,
                         HttpServletRequest request) throws Exception {
        // 세션에 등록된 멤버 가져오기.
        Long id = SessionConfig.sessionMemberId(request);
        request.setCharacterEncoding("utf-8");
        Member member = memberService.findById(id);

        Exercise exercise = Exercise.createExercise(member, form.getName(), form.getType());
        for (GoalDto goal : form.getGoals()) {
            goalService.createGoal(exercise, goal.getName());
        }
        exerciseService.createExercise(exercise);

        return "redirect goal page";
    }

    // 목표 수정
    @GetMapping("/edit/{exerciseId}")
    public ExerciseForm updatePage(HttpServletRequest request,
                                   @PathVariable Long exerciseId) {
        // 로그인 정보 가져와서 연결하기.
        Long id = SessionConfig.sessionMemberId(request);

        Exercise exercise = exerciseService.findOne(exerciseId);
        return new ExerciseForm(exercise);
    }

    @PostMapping("/edit/{exerciseId}")
    public String edit(@PathVariable Long exerciseId,
                       HttpServletRequest request,
                       @RequestBody ExerciseForm form) throws Exception {
        Long id = SessionConfig.sessionMemberId(request);
        request.setCharacterEncoding("utf-8");
        Exercise exercise = exerciseService.findOne(exerciseId);

        exerciseService.update(exercise, form.getName(), form.getType());
        goalService.deleteAllByExercise(exerciseId);

        for (GoalDto goal : form.getGoals()) {
            goalService.createGoal(exercise, goal.getName());
        }

        return "redirect goal page";
    }
    // 운동 삭제
    @DeleteMapping("/delete/{exerciseId}")
    public String delete(@PathVariable("exerciseId") Long id) {
        exerciseService.deleteExercise(id);
        return "redirect goal page";
    }
}
