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
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequiredArgsConstructor
public class GoalController {
    private final MemberService memberService;
    private final ExerciseService exerciseService;
    private final GoalService goalService;

    // 목표 페이지
    @GetMapping("/goal")
    public List<ExerciseForm> exercise(HttpServletRequest request) {
        // 로그인 정보 가져와서 연결하기.
        Long id = SessionConfig.sessionMemberId(request);
        List<ExerciseForm> collect = null;
        try {
            collect = exerciseService.findByMember(id).stream()
                    .map(e -> new ExerciseForm(e)).collect(Collectors.toList());
        } catch (Exception e) {
            return new ArrayList<>();
        }

        return collect;
    }


    // 목표 추가
    @GetMapping("/goal/new")
    public ExerciseForm createExercisePage() {
        return new ExerciseForm();
    }

    @PostMapping("/goal/new")
    public ExerciseForm create(@ModelAttribute ExerciseForm form,
                               HttpServletRequest request) throws Exception {
        // 세션에 등록된 멤버 가져오기.
        Long id = SessionConfig.sessionMemberId(request);
        request.setCharacterEncoding("utf-8");
        Member member = memberService.findById(id);

        Exercise exercise = Exercise.createExercise(member, form.getName(), form.getType());
        exerciseService.createExercise(exercise);
        for (GoalDto goal : form.getGoals()) {
            goalService.createGoal(exercise, goal.getName());
        }

        return form;
    }

    // 운동 삭제
    @DeleteMapping("/goal")
    public String delete() {

        return "";
    }

    // 운동 수정
    @GetMapping("/goal/edit")
    public String edit(Model model) {

        return "";
    }
}
