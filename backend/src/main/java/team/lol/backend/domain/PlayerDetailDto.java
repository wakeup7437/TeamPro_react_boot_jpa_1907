package team.lol.backend.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * PlayerDetail
 */
@Component @Data @Lazy
public class PlayerDetailDto {
    private int participantId;	
    private StatsDto stats;
    //private List<Object> runes;
    //private Object timeline;	
    private int teamId;	
    private int spell1Id;	
    private int spell2Id;	
    //private List<Object> masteries;	
    private String highestAchievedSeasonTier;	
    private int championId;	
    
}