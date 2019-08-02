package team.lol.backend.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * GameInfo
 */
@Data @Component @Lazy
public class GameInfo {

    private int champion;
    private Long timestamp;
    private Long gameDuration;
    private String role;
    private String lane;
    //platformId=KR
    //queue=420
    //season=13

    private Boolean win;
    
    //private List<GameUserDto> teams;
    private MatchDto match;
    private StatsDto stat;
}