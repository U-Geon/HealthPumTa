package com.healthpumta;

import com.healthpumta.domain.Gender;
import com.healthpumta.domain.Member;
import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@RequiredArgsConstructor
public class initDB {
    // 관리자 아이디 생성 (서버 실행 시 항상 생기는 아이디)
    private final InitService initService;
    @PostConstruct
    public void init() {
        initService.init();
    }
    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService {

        private final EntityManager em;
        public void init() {
            Member member = Member.createMember("admin", "1234", "admin", Gender.MALE, 1, 1, 1);
            em.persist(member);
        }
    }
}
