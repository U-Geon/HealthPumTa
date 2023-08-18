package com.healthpumta.domain;

import com.healthpumta.controller.form.ExerciseForm;
import com.healthpumta.controller.form.GoalDto;
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

    @Enumerated(EnumType.STRING)
    private Type type;

    @Column(unique = true)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "exercise")
    private List<Goal> goals = new ArrayList<>();

    // 연관관계 편의 메서드
    public void setMemberData(Member member) {
        this.member = member;
        member.getExercises().add(this);
    }

    public static Exercise createExercise(Member member, ExerciseForm form) {
        Exercise exercise = new Exercise();
        exercise.setMemberData(member);
        exercise.setName(form.getName());
        exercise.setType(form.getType());

        for (GoalDto goal : form.getGoals()) {
            Goal g = Goal.createGoal(exercise, goal.getName());
            exercise.getGoals().add(g);
        }
        return exercise;
    }



}
