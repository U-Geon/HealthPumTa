//package com.healthpumta.controller;
//
//import com.healthpumta.domain.Member;
//import com.healthpumta.service.MemberService;
//import jakarta.servlet.http.HttpServletRequest;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//
//@RestController
//@RequiredArgsConstructor
//public class TimerController {
//
//    private final MemberService memberService;
//
//    // 메인 화면
//    @GetMapping("/main")
//    public String timer() {
//        return "메인 화면";
//    }
//
//    // 타이머 완료
//    @PostMapping("/main")
//    public String timerRecord(@RequestParam("time") String time,
//                              HttpServletRequest request) {
//        // 로그인 세션 정보 받아와서 id 넣기
//        Long id = SessionConfig.sessionMemberId(request);
//
//        memberService.updateTimer(id, time);
//        return "redirect:/main";
//    }
//}
