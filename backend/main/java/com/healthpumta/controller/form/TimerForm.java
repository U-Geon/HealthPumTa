package com.healthpumta.controller.form;

import com.healthpumta.domain.Member;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class TimerForm {
    private String timer;

    public TimerForm(Member member) {
        if(member.getTimer() == null || member.getTimer().equals("")) {
            timer = "00_00_00";
        } else {
            timer = member.getTimer();
        }
    }
}
