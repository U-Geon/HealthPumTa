package com.healthpumta.service;

import com.healthpumta.domain.Member;
import com.healthpumta.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

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
    public Member findById(String memberId) {
        return memberRepository.findByLoginId(memberId).get(0);
    }

    // 단일 조회
    public Member findByLoginId(String id) {
        List<Member> byLoginId = memberRepository.findByLoginId(id);
        return byLoginId.get(0);
    }

    // 회원 정보 수정
    // 비밀번호, 닉네임, 키 몸무게 나이 변경
    @Transactional
    public void updateMember(String id, String nickName, String password) {
        Member member = memberRepository.findByLoginId(id).get(0);
        member.setNickname(nickName);
        member.setPassword(password);
    }

    // 닉네임 중복 확인
    private void validateDuplicateNickname() {

    }

    // 로그인
    public Member login(String id, String password) {
        return memberCheck(id, password);
    }

    // 로그인 체크
    private Member memberCheck(String id, String password) {
        List<Member> findMembers = memberRepository.findByLoginId(id);
        if(findMembers.stream().findAny().isEmpty()) {
            throw new IllegalStateException("없는 아이디입니다.");
        }
        Member member = findMembers.get(0);
        if (member.getPassword().equals(password)) {
            return member;
        } else {
            throw new IllegalStateException("비밀번호가 틀립니다.");
        }
    }
}
