package com.healthpumta.controller;

import com.healthpumta.domain.Member;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

public class SessionConfig {
    public static final String LOGIN_MEMBER = "loginMember";

    public static Long sessionMemberId(HttpServletRequest request) {
        HttpSession session = request.getSession();
        Member member = (Member) session.getAttribute(SessionConfig.LOGIN_MEMBER);
        return member.getId();
    }
}
