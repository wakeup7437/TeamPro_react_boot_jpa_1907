package team.lol.backend.domain;

import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * MatchDto is Detail of game
 */
@Component @Data @Lazy
public class MatchDto {

    @JsonProperty("participantIdentities")
    private List<PlayerDto> playersList;

    private int mapId;
    private List<Map<String,Object>> teams;
    private List<PlayerDetailDto> participants;

    private Long gameDuration;
}