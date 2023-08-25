package com.healthpumta.controller.form;

import com.healthpumta.domain.Gender;
import com.healthpumta.domain.Member;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MemberForm {
    private String loginId;
    private String password;
    private String nickname;
    private int height;
    private int weight;
    private int age;
    private Gender gender;

    public MemberForm() {
    }

    public MemberForm(Member member) {
        loginId = member.getLoginId();
        password = member.getPassword();
        nickname = member.getNickname();
        height = member.getHeight();
        weight = member.getWeight();
        age = member.getAge();
        gender = member.getGender();
    }
}
