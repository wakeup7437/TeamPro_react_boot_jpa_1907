package team.lol.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.lol.backend.entities.Board;
import team.lol.backend.repositories.BoardRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;



/**
 * BoardController
 */
@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping("/board")
public class BoardController {

    @Autowired
    BoardRepository repo;

    //@RequestParam int param
    @GetMapping("/all")
    //@Transactional(readOnly = true)
    public Page<Board> getBoardPage() {
        System.out.println("getpage================================================");
        //Pageable page = PageRequest.of(0, 10,Sort.Direction.DESC,"bno");
        Pageable page = PageRequest.of(0, 10,new Sort(Direction.DESC,"bno"));
        return repo.findAll(page);
        //return repo.findAll(page);
    }
    //입력
    @PostMapping("/insert")
    public Boolean insert(){
        
        return false;
    }
    //수정
    @PutMapping(value="/update/{id}")
    public Boolean update(@PathVariable String id, @RequestBody List<?> entity) {
        
        return false;
    }
    //삭제
    @DeleteMapping("/delete/{bno}")
    public Boolean delete(@PathVariable String bno){
        
        System.out.println("===========del=======================");
        System.out.println("bno :"+bno);
        System.out.println(repo.existsById(Long.valueOf(bno)));
        //int result = 
        //repo.deleteByBno(Long.valueOf(bno));
        //System.out.println("delete: "+result);
        repo.deleteById(4L);
        return false;
    }
}