package team.lol.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.lol.backend.entities.Reply;
import team.lol.backend.repositories.ReplyRepository;

/**
 * ReplyContoller
 */

@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping("/reply")
public class ReplyContoller {

    @Autowired
    ReplyRepository repo;

//C
    @PostMapping("/insert")
    public void insert(@RequestBody Reply reply){
        repo.save(reply);
    }
//R

//U

//D
    
}