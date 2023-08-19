package com.healthpumta.service;

import com.healthpumta.domain.Gender;
import com.healthpumta.domain.Member;
import com.healthpumta.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    // 회원 가입
    @Transactional
    public Long join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    // 회원 가입 시 중복 체크
    private void validateDuplicateMember(Member member) {
        // exceptions
        List<Member> findMemberById = memberRepository.findByLoginId(member.getLoginId());

        if(!findMemberById.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

    // 회원 전체 조회
    public List<Member> findAll() {
        return memberRepository.findAll();
    }

    // 회원 단일 조회
    public Member findById(Long memberId) {
        return memberRepository.findOne(memberId);
    }

    // 단일 조회
    public Member findByLoginId(String id) {
        List<Member> byLoginId = memberRepository.findByLoginId(id);
        return byLoginId.get(0);
    }

    // 회원 정보 수정
    // 비밀번호, 닉네임, 키 몸무게 나이 변경
    @Transactional
    public void updateMember(Long id, String password, int height, int weight, int age, Gender gender) {
        Member member = memberRepository.findOne(id);
        member.setPassword(password);
        member.setHeight(height);
        member.setWeight(weight);
        member.setAge(age);
        member.setGender(gender);
    }

    // 타이머 데이터 입력
    @Transactional
    public void updateTimer(Long id, String timer) {
        Member member = memberRepository.findOne(id);
        member.setTimer(timer);
    }
}
