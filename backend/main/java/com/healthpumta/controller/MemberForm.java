package com.healthpumta.controller;

import com.healthpumta.domain.Gender;
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
}
