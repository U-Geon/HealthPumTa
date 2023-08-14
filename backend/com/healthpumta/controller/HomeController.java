package com.healthpumta.controller;

import com.healthpumta.domain.Member;
import com.healthpumta.service.SessionManager;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class HomeController {

    private final SessionManager sessionManager;
    @GetMapping("/")
    public String home(HttpServletRequest request, Model model) {

        Member member = (Member) sessionManager.getSession(request);
        if(member == null) {
            return "홈화면";
        }

        model.addAttribute("member", member);
        return "메인화면";
    }
}
