<<<<<<< Updated upstream
package com.healthpumta.service;

import com.healthpumta.domain.Exercise;
import com.healthpumta.domain.Member;
import com.healthpumta.domain.Type;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
class ExerciseServiceTest {
    
    @Test
    public void 운동추가() throws Exception {
        // given
        Member member = new Member();
        member.setNickname("ryuGeon");

        Exercise exercise = new Exercise();
        exercise.setMember(member);
        exercise.setName("벤치프레스");
        exercise.setType(Type.HEALTH);


        // when
        
        // then
    }
    

=======
package com.healthpumta.service;

import com.healthpumta.domain.Exercise;
import com.healthpumta.domain.Member;
import com.healthpumta.domain.Type;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
class ExerciseServiceTest {
    
    @Test
    public void 운동추가() throws Exception {
        // given
        Member member = new Member();
        member.setNickname("ryuGeon");

        Exercise exercise = new Exercise();
        exercise.setMember(member);
        exercise.setName("벤치프레스");
        exercise.setType(Type.HEALTH);


        // when
        
        // then
    }
    

>>>>>>> Stashed changes
}