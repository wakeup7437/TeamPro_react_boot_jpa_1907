package team.lol.backend.domain;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * GameDto 게임 한판에 대한 가공 데이터
 */
@Component @Lazy @Data
public class GameDto {
    private Long gameId;
    private int champion;
    
    private String role;
    private String lane;
    //platformId=KR
    //queue=420
    //season=13
    private Long timestamp;

    //custom set
    private Boolean win;
    private Long gameDuration;
    private List<UserInfo> teams;
    //private MatchDto match;
    private StatsDto stat;
}