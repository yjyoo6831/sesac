package codingon.spring_boot_security.security;
// security 패키지 : 인증/인가에 관련된 클래스 모음

import codingon.spring_boot_security.entity.UserEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Slf4j
@Service
// 사용자 정보를 받아서 JWT를 생성하는 클래스
public class TokenProvider {
    // 비밀키 생성
    private static final String SECRET_KEY = "sesac-springboot-231234";

    // create() : JWT 생성
    public String create(UserEntity userEntity){
        Date expiryDate = Date.from(
                Instant.now().plus(1, ChronoUnit.DAYS) // 기한 : 지금부터 1일
        );

        // JWT 토큰 생성
         return Jwts.builder()
                 // header(token 구성 요소 중 하나) 에 들어갈 내용 및 서명을 하기 위한 설정
                 .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                 // payload에 들어갈 내용
                 .setSubject(String.valueOf(userEntity.getId())) // 토큰 제목
                 .setIssuer("demo app") // iss: 토큰 발급자
                 .setIssuedAt(new Date()) // iat: 토큰이 발급된 시간
                 .setExpiration(expiryDate) // exp: 토큰 만료 시간
                 // 토큰 생성
                 .compact();
    }
    // validateAndGetUserId() : 토큰 디코딩 및 파싱하고 토큰 위조 여부 확인 -> 사용자의 아이디 리턴
    public String validateAndGetUserId(String token){
        // parseclaimsJws() : Base64로 디코딩/파싱
        // - header와 payload를 setSiginingKey()의 인자로 넘어온 비밀키를 이용해 서명한 다음
        // token의 서명과 비교
        // - 두 개의 값이 일치한다면(위조되지 않음) 페이로드 리턴,
        // - 두 값이 불일치(위조)하면 예외
        // - 결국 필요한 것은 userId 이므로 getBody를 부른다.
        Claims claims = Jwts.parser() // 파서 생성
                .setSigningKey(SECRET_KEY) // 서명 검증을 위해 비밀키 입력
                .parseClaimsJws(token) // 토큰을 파싱하고 서명 검증 -> 토큰 위조  예외 발생
                .getBody(); // 검증된 토큰의 본문(claims)을 가져옴

        // claims에서 subject(사용자 id)를 추출해서 반환
        return claims.getSubject();
    }
}
