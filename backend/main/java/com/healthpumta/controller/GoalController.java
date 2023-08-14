//package com.healthpumta.controller;
//
//import com.healthpumta.controller.form.ExerciseForm;
//import com.healthpumta.controller.form.GoalDto;
//import com.healthpumta.domain.Exercise;
//import com.healthpumta.domain.Member;
//import com.healthpumta.service.ExerciseService;
//import com.healthpumta.service.MemberService;
//import jakarta.servlet.http.HttpServletRequest;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@Slf4j
//@RestController
//@RequiredArgsConstructor
//public class GoalController {
//    private final MemberService memberService;
//    private final ExerciseService exerciseService;
//
//    // 목표 페이지
//    @GetMapping("/goal")
//    public List<ExerciseForm> exercise(Model model, HttpServletRequest request) {
//        // 로그인 정보 가져와서 연결하기.
//        Long id = SessionConfig.sessionMemberId(request);
//
//        List<ExerciseForm> exercises = exerciseService.findAll(id);
//
//        model.addAttribute("exercise", exercises);
//        return exercises;
//    }
//
//    // 목표 추가
//    @GetMapping("/goal/new")
//    public String createExercisePage(Model model) {
//        model.addAttribute("exercise", new ExerciseForm());
//        return "운동 페이지";
//    }
//
//    @PostMapping("/goal/new")
//    public ExerciseForm create(@ModelAttribute ExerciseForm form,
//                               HttpServletRequest request) {
//        // 세션에 등록된 멤버 가져오기.
//        Long id = SessionConfig.sessionMemberId(request);
//        Member member = memberService.findById(id);
//
//        Exercise exercise = new Exercise();
//        exercise.setMember(member);
//        member.getExercises().add(exercise);
//        exercise.setName(form.getName());
//        exercise.setType(form.getType());
//
//        exerciseService.createExercise(exercise);
//
//        return form;
//    }
//
//    // 운동 삭제
//    @DeleteMapping("/goal")
//    public String delete() {
//
//        return "";
//    }
//
//    // 운동 수정
//    @GetMapping("/goal/edit")
//    public String edit(Model model) {
//
//        return "";
//    }
//
//}
