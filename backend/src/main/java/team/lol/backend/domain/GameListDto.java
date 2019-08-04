package team.lol.backend.domain;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * GameListDto
 */
@Data @Component @Lazy
public class GameListDto {
    private List<GameDto> matches;
    private int totalGames;
    private int startIndex;
    private int endIndex;

    //custom variable
    //private SummonerDto user;
}