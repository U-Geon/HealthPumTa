<<<<<<< Updated upstream
package com.healthpumta.domain;

import jakarta.persistence.*;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Entity
@Getter @Setter
public class Member {
    @Id @GeneratedValue
    private Long id;
    private String nickname;
    private int height;
    private int weight;
    private int age;
    @Enumerated
    private Gender gender;
    private String loginId;
    private String password;

    @OneToMany(mappedBy = "member")
    private List<Exercise> exercises = new ArrayList<>();

    public void addExercise(Exercise exercise) {
        exercises.add(exercise);
        exercise.setMember(this);
    }
}
=======
package com.healthpumta.domain;

import jakarta.persistence.*;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Entity
@Getter @Setter
public class Member {
    @Id @GeneratedValue
    private Long id;
    private String nickname;
    private int height;
    private int weight;
    private int age;
    @Enumerated
    private Gender gender;
    private String loginId;
    private String password;

    @OneToMany(mappedBy = "member")
    private List<Exercise> exercises = new ArrayList<>();

    public void addExercise(Exercise exercise) {
        exercises.add(exercise);
        exercise.setMember(this);
    }
}
>>>>>>> Stashed changes
