package team.lol.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.lol.backend.entities.Board;

import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


/**
 * BoardController
 */
@RestController
@RequestMapping("/board")
public class BoardController {

    @GetMapping("")
    @Transactional(readOnly = true)
    public Page<Board> getMethodName(@RequestParam String param) {
        return null;
    }
    
}