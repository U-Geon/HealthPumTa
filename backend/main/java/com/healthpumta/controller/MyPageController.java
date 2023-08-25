package com.healthpumta.controller;

import com.healthpumta.controller.form.MemberForm;
import com.healthpumta.domain.Member;
import com.healthpumta.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class MyPageController {
    private final MemberService memberService;

    // 마이 페이지
    @GetMapping(value = {"/myPage", "/myPage/edit"})
    public MemberForm myPage(HttpServletRequest request) {
        Long memberId = SessionConfig.sessionMemberId(request);

        Member member = memberService.findById(memberId);

        MemberForm form = new MemberForm(member);

        return form;
    }

    @PostMapping("/myPage/edit")
    public MemberForm edit(HttpServletRequest request,@RequestBody MemberForm form) {
        Long memberId = SessionConfig.sessionMemberId(request);
        memberService.updateMember(
                memberId,
                form.getPassword(),
                form.getHeight(),
                form.getWeight(),
                form.getAge(),
                form.getGender());

        return form;
    }
}
