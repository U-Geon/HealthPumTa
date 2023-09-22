# HealthPumTa
개발자 : 정호용, 유건, 김윤희, 이정욱, 정찬우 

운동 스톱워치 기록 앱

# 프론트 실행 방법


# 백엔드 실행 방법
- https://start.spring.io/ 에서 프로젝트 생성
- java 17, 필요한 dependency 추가
- dependenty
  - 'org.springframework.boot:spring-boot-starter-data-jpa'
	- 'org.springframework.boot:spring-boot-starter-thymeleaf'
	- 'org.springframework.boot:spring-boot-starter-web'
	- 'org.springframework.boot:spring-boot-devtools'
	- 'com.github.gavlyukovskiy:p6spy-spring-boot-starter:1.9.0'
	- 'org.springframework.boot:spring-boot-starter-validation'
  - lombok
  - h2 database
 
- 이후 application.properties 대신 application.yml로 바꿔주고 추가
```
spring:
  datasource:
    url: jdbc:h2:tcp://localhost/~/healthpumta
    username: sa
    password:
    driver-class-name: org.h2.Driver

  jpa:
    hibernate:
      ddl-auto: create
    properties:
      hibernate:
        show_sql: true
        format_sql: true

logging:
  level:
    org.hibernate.SQL: debug
```
