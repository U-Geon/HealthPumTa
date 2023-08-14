package com.healthpumta.controller;

import com.healthpumta.domain.Member;
import com.healthpumta.service.MemberService;
import com.healthpumta.service.SessionManager;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/join")
@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final SessionManager sessionManager;

    // 회원 가입
    @GetMapping("/new")
    public String createForm(Model model) {
        model.addAttribute("userForm", new MemberForm());
        return "회원가입 페이지";
    }

    @PostMapping("/new")
    public String create(@ModelAttribute MemberForm form) {
        Member member = new Member();

        member.setLoginId(form.getLoginId());
        member.setPassword(form.getPassword());

        member.setNickname(form.getNickname());
        member.setGender(form.getGender());
        member.setHeight(form.getHeight());
        member.setWeight(form.getWeight());
        member.setAge(form.getAge());

        memberService.join(member);
        return "redirect:/";
    }

    // 로그인
    @GetMapping
    public String logInForm(Model model) {
        model.addAttribute("loginForm", new LoginForm());
        return "로그인 화면";
    }

    @PostMapping
    public String logIn(@ModelAttribute LoginForm form,
                        BindingResult result,
                        HttpServletResponse response) {

        if(result.hasErrors()) {
            return "/login화면";
        }

        Member loginMember = memberService.login(form.getLoginId(), form.getPassword());
        if(loginMember == null) {
            result.reject("loginFail", "아이디 또는 비번이 맞지 않음");
            return "/login화면";
        }

        // 로그인 성공
        sessionManager.createSession(loginMember, response);
        return "redirect:/main화면";
    }
}
