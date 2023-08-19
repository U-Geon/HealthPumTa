package com.healthpumta.domain;

import jakarta.persistence.*;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
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
}
