package team.lol.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.lol.backend.domain.BoardDto;
import team.lol.backend.entities.Board;
import team.lol.backend.entities.Reply;
import team.lol.backend.repositories.BoardRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    @GetMapping("/all")
    @Transactional
    public Object getBoardPage() {
        //System.out.println("===================getpage=====================================");
        //Pageable page = PageRequest.of(0, 200,new Sort(Direction.DESC,"bno"));
        //Page<Board> list =repo.findAll(page);
        //System.out.println(list.getContent());
        //Page<BoardDto> blist
        List<BoardDto> temp=new ArrayList<>();
        Iterable<Board> blist=repo.findAll();
        blist.forEach(v->{
            BoardDto dto= new BoardDto();
            dto.setBno(v.getBno());
            dto.setWriter(v.getWriter());
            dto.setTitle(v.getTitle());
            dto.setCategory(v.getCategory());
            dto.setRecommend(v.getRecommend());
            dto.setRegdate(v.getRegdate());
            dto.setReplies(v.getReplies().size());
            temp.add(dto);
        });
        return blist;
    }
    @Transactional
    @GetMapping("/detail/{bno}")
    public Object getDetail(@PathVariable String bno){
        Optional<Board> board = repo.findById(Long.valueOf(bno));
        if(board.isPresent()){
            //System.out.println("======board detail======"); 
            Board obj=board.get();
            System.out.println(obj.getReplies());
            return obj;
        }     
        return false;
    }
    //입력
    @PostMapping("/insert")
    public Board insert(@RequestBody Board board){
        //System.out.println("=====insert=====");
        //System.out.println(board);
        Board result=repo.save(board);
        return result;
    }
    //수정
    @Transactional
    @PutMapping("/update")
    public Boolean update(@RequestBody Board board){
        System.out.println("====update=====");
        System.out.println(board);
        Board obj=repo.findByBno(board.getBno());
        System.out.println(obj);
        obj.setTitle(board.getTitle());
        obj.setCategory(board.getCategory());
        obj.setContent(board.getContent());
        repo.save(obj);

        return true;
    }
    //삭제
    @Transactional
    @DeleteMapping("/delete/{bno}")
    public Boolean delete(@PathVariable String bno){
        
        //System.out.println("===========del=======================");
        //System.out.println("bno :"+bno);
        //System.out.println(repo.existsById(Long.valueOf(bno)));
        //int result = 
        //repo.deleteByBno(Long.valueOf(bno));
        //System.out.println("delete: "+result);
        try {
            repo.deleteById(Long.valueOf(bno));
            return true;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
}