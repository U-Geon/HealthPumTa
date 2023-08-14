package com.healthpumta.controller;

import com.healthpumta.domain.Member;
import com.healthpumta.service.LoginService;
import com.healthpumta.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;
    private final MemberService memberService;
    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    @GetMapping("/login")
    public String loginForm(@ModelAttribute("loginForm") LoginForm form) {
        return "login/loginForm";
    }

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
        session.setAttribute(SessionConst.LOGIN_MEMBER, loginMember);

        Member loginedMember = (Member) session.getAttribute(SessionConst.LOGIN_MEMBER);

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

//    @PostMapping("/login")
//    public Map<String, Object> springDataTest2(@RequestBody Map<String, Object> paraMap) {
//        String id = (String) paraMap.get("id");
//        String pw = (String) paraMap.get("pw");
//
//        Map<String, Object> resultMap = new HashMap<String, Object>();
//        resultMap.put("idData", "response: " + id);
//        resultMap.put("pwData", "resposne: " + pw);
//        return resultMap;
//    }

}
