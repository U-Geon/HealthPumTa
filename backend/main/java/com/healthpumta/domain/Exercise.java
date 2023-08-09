<<<<<<< Updated upstream
package com.healthpumta.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Exercise {

    @Id @GeneratedValue
    private Long id;

    @Enumerated
    private Type type;

    @Column(unique = true)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "exercise", cascade = CascadeType.ALL)
    private List<Goal> goals = new ArrayList<>();


    // 연관관계 편의 메서드

    public void setMember(Member member) {
        this.member = member;
        member.getExercises().add(this);
    }

    public void addGoal(Goal goal) {
        goals.add(goal);
        goal.setExercise(this);
    }

    // 생성 메서드
    public static Exercise create(Member member, Goal... goals) {
        Exercise exercise = new Exercise();
        exercise.setMember(member);
        for (Goal goal : goals) {
            goal.setExercise(exercise);
        }
        return exercise;
    }
}
=======
package com.healthpumta.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Exercise {

    @Id @GeneratedValue
    private Long id;

    @Enumerated
    private Type type;

    @Column(unique = true)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "exercise", cascade = CascadeType.ALL)
    private List<Goal> goals = new ArrayList<>();


    // 연관관계 편의 메서드

    public void setMember(Member member) {
        this.member = member;
        member.getExercises().add(this);
    }

    public void addGoal(Goal goal) {
        goals.add(goal);
        goal.setExercise(this);
    }

    // 생성 메서드
    public static Exercise create(Member member, Goal... goals) {
        Exercise exercise = new Exercise();
        exercise.setMember(member);
        for (Goal goal : goals) {
            goal.setExercise(exercise);
        }
        return exercise;
    }
}
>>>>>>> Stashed changes
