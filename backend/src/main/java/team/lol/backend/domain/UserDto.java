package team.lol.backend.domain;

import java.sql.Timestamp;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;


@Component @Lazy @Data
public class UserDto {
    private Long  Uno;
    private String  userName;
    private String  password;
    private String  email;
    private Timestamp  regdate;
    private Timestamp  updatedate;
    private String  npass;
    
}