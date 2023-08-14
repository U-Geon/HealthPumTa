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
    @GetMapping("/myPage")
    public MemberForm myPage(Model model, HttpServletRequest request) {
        Long id = SessionConfig.sessionMemberId(request);
        Member findMember = memberService.findById(id);

        MemberForm form = new MemberForm(findMember);
        return form;
    }

    // 마이 페이지 수정
    @GetMapping("/myPage/edit")
    public MemberForm editMyPage(Model model, HttpServletRequest request) {
        Long memberId = SessionConfig.sessionMemberId(request);

        Member member = memberService.findById(memberId);

        MemberForm form = new MemberForm();
        form.setLoginId(member.getLoginId());
        form.setPassword(member.getPassword());
        form.setNickname(member.getNickname());
        form.setHeight(member.getHeight());
        form.setWeight(member.getWeight());
        form.setAge(member.getAge());
        form.setGender(member.getGender());

        model.addAttribute("member", form);
//        return "수정 페이지";
        return form;
    }

    @PostMapping("/myPage/edit")
    public MemberForm edit(HttpServletRequest request,@ModelAttribute MemberForm form) {
        Long memberId = SessionConfig.sessionMemberId(request);
        memberService.updateMember(memberId, form.getPassword(), form.getHeight(), form.getWeight(), form.getAge());

        return form;
    }
}
