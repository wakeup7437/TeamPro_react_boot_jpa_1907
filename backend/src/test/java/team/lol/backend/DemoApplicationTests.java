package team.lol.backend;

import java.util.Random;
import java.util.stream.IntStream;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import team.lol.backend.entities.Board;
import team.lol.backend.entities.Reply;
import team.lol.backend.repositories.BoardRepository;
import team.lol.backend.repositories.ReplyRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {

	@Autowired
	BoardRepository board_repo;

	@Autowired
	ReplyRepository reply_repo;

	@Test
	public void contextLoads() {
		 
	}
	
	@Test
	public void dummyInsert(){
		IntStream.range(0, 200).forEach(i->{
			Board b=new Board();
			b.setTitle("title"+i);
			b.setCategory(i%5+1);
			b.setWriter("writer"+i);
			b.setContent("content..."+i);

			board_repo.save(b);
		});
	}

	@Test
	public void replyInsert(){
		
		Random rand=new Random();
		IntStream.range(0, 100).forEach(i->{
			Board b = new Board();
			b.setBno(rand.nextInt(100)+1L);
			Reply r = new Reply();
			r.setBoards(b);
			r.setReply("reply"+i);
			r.setReplyer("replyer"+i);

			reply_repo.save(r);
		});
	}

	@Transactional
	@Test
	public void getBoard(){
		Pageable page = PageRequest.of(10,20,Sort.Direction.DESC,"bno");
		Page<Board> p=board_repo.findAll(page);
		p.forEach(u->{
			System.out.println("--------------------------------------");
			System.out.println(u.toString()+"||");
		});
	}

}
