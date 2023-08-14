package com.healthpumta.controller;

import com.healthpumta.controller.form.MemberForm;
import com.healthpumta.domain.Member;
import com.healthpumta.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@Slf4j
@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    // 회원 가입
    @GetMapping("/join")
    public String createForm(Model model) {
        model.addAttribute("userForm", new MemberForm());
        return "회원가입 페이지";
    }

    @PostMapping("/join")
    public String create(@ModelAttribute MemberForm form) {
        Member member = new Member();

        member.setLoginId(form.getLoginId());
        member.setPassword(form.getPassword());

        member.setNickname(form.getNickname());
        member.setGender(form.getGender());
        member.setHeight(form.getHeight());
        member.setWeight(form.getWeight());
        member.setAge(form.getAge());
        member.setGender(form.getGender());

        memberService.join(member);
        return "redirect:/";
    }
}
