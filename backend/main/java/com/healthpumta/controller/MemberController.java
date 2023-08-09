<<<<<<< Updated upstream
package com.healthpumta.controller;

import com.healthpumta.domain.Member;
import com.healthpumta.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequestMapping("/join")
@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

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
        model.addAttribute("loginForm", new LogInForm());
        return "로그인 페이지";
    }

    @PostMapping
    public String logIn(@ModelAttribute LogInForm form) {
        Member findMember = memberService.findByLoginId(form.getLoginId());
        memberService.memberCheck(findMember.getLoginId(), form.getPassword());

        return "redirect:/join";
    }
}
=======
package com.healthpumta.controller;

import com.healthpumta.domain.Member;
import com.healthpumta.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequestMapping("/join")
@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

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
        model.addAttribute("loginForm", new LogInForm());
        return "로그인 페이지";
    }

    @PostMapping
    public String logIn(@ModelAttribute LogInForm form) {
        Member findMember = memberService.findByLoginId(form.getLoginId());
        memberService.memberCheck(findMember.getLoginId(), form.getPassword());

        return "redirect:/join";
    }
}
>>>>>>> Stashed changes
