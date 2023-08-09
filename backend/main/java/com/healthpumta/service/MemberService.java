<<<<<<< Updated upstream
package com.healthpumta.service;

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

    @Transactional
    public Long join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        // exceptions
        List<Member> findMembers = memberRepository.findByName(member.getNickname());
        if(!findMembers.isEmpty()) {
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

    public Member findByLoginId(String id) {
        return memberRepository.findByLoginId(id);
    }

    // 회원 정보 수정
    public void updateMember(Long id, String nickName, String password) {
        Member member = memberRepository.findOne(id);
        member.setNickname(nickName);
        member.setPassword(password);
    }

    // 로그인 체크
    public Member memberCheck(String id, String password) {
        Member findMember = memberRepository.findByLoginId(id);
        if(findMember == null) {
            throw new IllegalStateException("없는 아이디입니다.");
        }
        if (findMember.getPassword().equals(password)) {
            return findMember;
        } else {
            throw new IllegalStateException("비밀번호가 틀립니다.");
        }

    }

}
=======
package com.healthpumta.service;

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

    @Transactional
    public Long join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        // exceptions
        List<Member> findMembers = memberRepository.findByName(member.getNickname());
        if(!findMembers.isEmpty()) {
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

    public Member findByLoginId(String id) {
        return memberRepository.findByLoginId(id);
    }

    // 회원 정보 수정
    public void updateMember(Long id, String nickName, String password) {
        Member member = memberRepository.findOne(id);
        member.setNickname(nickName);
        member.setPassword(password);
    }

    // 로그인 체크
    public Member memberCheck(String id, String password) {
        Member findMember = memberRepository.findByLoginId(id);
        if(findMember == null) {
            throw new IllegalStateException("없는 아이디입니다.");
        }
        if (findMember.getPassword().equals(password)) {
            return findMember;
        } else {
            throw new IllegalStateException("비밀번호가 틀립니다.");
        }

    }

}
>>>>>>> Stashed changes
