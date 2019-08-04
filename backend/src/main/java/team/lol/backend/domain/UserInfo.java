package team.lol.backend.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * UserInfo
 */
@Component @Lazy @Data
public class UserInfo {

    private String name;
    private int champ;
    private int participantId;
    private int teamId;

}