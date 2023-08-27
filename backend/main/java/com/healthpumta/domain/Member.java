package com.healthpumta.domain;

import com.healthpumta.controller.form.MemberForm;
import jakarta.persistence.*;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter @Setter
public class Member {
    @Id @GeneratedValue
    private Long id;
    private String nickname;
    private int height;
    private int weight;
    private int age;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String loginId;
    private String password;
    private String timer;

    public static Member createMember(String loginId,
                                      String password,
                                      String nickname,
                                      Gender gender,
                                      int height,
                                      int weight,
                                      int age) {
        Member member = new Member();

        member.setLoginId(loginId);
        member.setPassword(password);

        member.setNickname(nickname);
        member.setGender(gender);
        member.setHeight(height);
        member.setWeight(weight);
        member.setAge(age);

        return member;
    }
}
