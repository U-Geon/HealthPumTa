package com.healthpumta.controller;

import com.healthpumta.domain.Member;
import com.healthpumta.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class HomeController {

    private final MemberService memberService;
    @GetMapping("/")
    public String home(HttpServletRequest request) {

//        Long id = SessionConfig.sessionMemberId(request);
//        if(id == null) {
//            return "홈화면";
//        }
//        Member member = memberService.findById(id);
//        model.addAttribute("member", member);

        return "메인화면";
    }
}
