package team.lol.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.lol.backend.entities.Board;
import team.lol.backend.repositories.BoardRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


/**
 * BoardController
 */
@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping("/board")
public class BoardController {

    @Autowired
    BoardRepository repo;

    @GetMapping("")
    @Transactional(readOnly = true)
    public Page<Board> getBoardPage(@RequestParam String param) {
        Pageable page = PageRequest.of(0, 10,Sort.Direction.DESC,"bno");

        return repo.findAll(page);
    }
    
}