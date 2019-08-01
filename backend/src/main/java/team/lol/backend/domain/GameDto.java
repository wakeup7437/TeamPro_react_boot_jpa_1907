package team.lol.backend.domain;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * GameDto
 */
@Component @Lazy @Data
public class GameDto {
    private Long gameId;
    private int champion;
    private Long timestamp;
    private String role;
    private String lane;
    //platformId=KR
    //queue=420
    //season=13

    private Boolean winner;
    private Long gameDuration;
    //private List<GameUserDto> teams;
    private MatchDto match;
}