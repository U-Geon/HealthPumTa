package com.healthpumta.api;

import com.healthpumta.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;

    // 회원 가입
    @GetMapping("/api/")
    public void readMemberApi() {

    }

    static class MemberDto {
        private String nickname;

    }

    // 로그인

}
