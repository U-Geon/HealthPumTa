package com.healthpumta.service;

import com.healthpumta.domain.Gender;
import com.healthpumta.domain.Member;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.fail;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
class MemberServiceTest {

    @Autowired
    MemberService memberService;
    @Test
    public void 회원가입() throws Exception {
        // given
        Member member = new Member();
        member.setNickname("fbrjs");
        member.setAge(24);
        member.setWeight(64);
        member.setHeight(171);
        member.setGender(Gender.MALE);
        member.setLoginId("sksmsfbrjs");
        member.setPassword("ss64267844");

        // when
        Long savedId = memberService.join(member);

        // then
        assertThat(member).isEqualTo(memberService.findById(savedId));
    }

    @Test
    public void 회원가입_중복닉네임() throws Exception {
        // given
        Member member1 = new Member();
        Member member2 = new Member();

        member1.setNickname("asdf");
        member2.setNickname("asdf");

        // when
        memberService.join(member1);

        // then
        Assertions.assertThrows(IllegalStateException.class,
                () -> memberService.join(member2));
    }



    @Test
    public void 회원가입_중복아이디() throws Exception {
        // given
        Member member1 = new Member();
        Member member2 = new Member();

        member1.setLoginId("fbrjs");;
        memberService.join(member1);

        // when
        member2.setLoginId("fbrjs");

        // then

        Assertions.assertThrows(IllegalStateException.class,
                () -> memberService.join(member2));
    }

    @Test
    public void 로그인_성공() throws Exception {
        Member member1 = new Member();

        member1.setLoginId("fbrjs");
        member1.setPassword("ss64267844");

        memberService.join(member1);

        // when
        Member findMember = memberService.findByLoginId(member1.getLoginId());

        // then
        Assertions.assertEquals(member1, findMember);
    }

    @Test
    public void 로그인_실패() throws Exception {
        Member member1 = new Member();

        member1.setLoginId("fbrjs");
        member1.setPassword("ss64267844");

        memberService.join(member1);

        // then
        Assertions.assertThrows(Exception.class, () -> memberService.login("fbrjs", "12345678"));
    }
}