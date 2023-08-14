package com.healthpumta.service;

import com.healthpumta.domain.Member;
import com.healthpumta.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final MemberRepository memberRepository;

    public Member login(String loginId, String password) {
        List<Member> members = memberRepository.findByLoginId(loginId);

        // 해당 loginId에 해당하는 회원이 없을 경우
        if (members.isEmpty()) {
            return null;
        }

        // 비밀번호 검증
        for (Member member : members) {
            if (member.getPassword().equals(password)) {
                return member;
            }
        }

        return null; // 로그인 실패
    }
}
