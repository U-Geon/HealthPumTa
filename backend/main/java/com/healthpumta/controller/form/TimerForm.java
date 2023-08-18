package com.healthpumta.controller.form;

import com.healthpumta.domain.Member;
import lombok.Getter;

@Getter
public class TimerForm {
    private String timer;

    public TimerForm(Member member) {
        if(member.getTimer() == null) {
            timer = "00:00:00";
        } else {
            timer = member.getTimer();
        }
    }
}
