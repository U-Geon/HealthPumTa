package com.healthpumta.controller;

import com.healthpumta.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class HomeController {

    private final MemberService memberService;
    @GetMapping("/")
    public String home(HttpServletRequest request) {
        return " start page";
    }
}
