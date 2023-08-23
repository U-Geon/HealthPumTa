package com.healthpumta.controller;

import com.healthpumta.controller.form.LoginForm;
import com.healthpumta.domain.Member;
import com.healthpumta.service.LoginService;
import com.healthpumta.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/login")
    public String login(@RequestBody Map<String, Object> paraMap, HttpServletRequest request) {
        @Valid LoginForm form = new LoginForm();
        form.setLoginId((String) paraMap.get("id"));
        form.setPassword((String) paraMap.get("pw"));

        Member loginMember = loginService.login(form.getLoginId(), form.getPassword());
        log.info("login? {}", loginMember);

        if (loginMember == null) {
            return "로그인 실패";
        }
        //로그인 성공 처리
        //세션이 있으면 있는 세션 반환, 없으면 신규 세션 생성
        HttpSession session = request.getSession();
        //세션에 로그인 회원 정보 보관
        session.setAttribute(SessionConfig.LOGIN_MEMBER, loginMember);

        Member loginedMember = (Member) session.getAttribute(SessionConfig.LOGIN_MEMBER);

        return loginedMember.getLoginId();
    }

    @PostMapping("/logout")
    public String logoutV3(HttpServletRequest request) {
        //세션을 삭제한다.
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        return "redirect:/";
    }
}