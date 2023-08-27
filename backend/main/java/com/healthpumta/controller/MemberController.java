package com.healthpumta.controller;

import com.healthpumta.controller.form.MemberForm;
import com.healthpumta.domain.Member;
import com.healthpumta.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;


@Slf4j
@RestController
@RequestMapping("/join")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping
    public String create(@RequestBody MemberForm form) {

        Member member = Member.createMember(
                form.getLoginId(),
                form.getPassword(),
                form.getNickname(),
                form.getGender(),
                form.getHeight(),
                form.getWeight(),
                form.getAge()
        );
        memberService.join(member);
        return "redirect home page";
    }
}
