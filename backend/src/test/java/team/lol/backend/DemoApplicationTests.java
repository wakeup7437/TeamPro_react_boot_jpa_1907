package team.lol.backend;

import java.util.List;
import java.util.Optional;
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
	public void boardBummyInsert(){
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
	public void replyDummyInsert(){
		
		Random rand=new Random();
		IntStream.range(0, 100).forEach(i->{
			Reply r = new Reply();
			r.setBno(rand.nextInt(200)+1L);
			r.setReply("reply"+i);
			r.setReplyer("replyer"+i);

			reply_repo.save(r);
		});
	}

	@Transactional
	@Test
	public void getBoardPage(){
		Pageable page = PageRequest.of(10,20,Sort.Direction.DESC,"bno");
		System.out.println("====================test start======================");
		Page<Board> p=board_repo.findAll(page);
		System.out.println(p.getContent());
		p.forEach(u->{
			System.out.println("----------------t----------------------");
			System.out.println(u.toString()+"||");
		});
		System.out.println("====================test end======================");
	}

	@Transactional
	@Test
	public void getBoardAll(){
		Iterable<Board> list=board_repo.findAll();
		list.forEach(i->{
			System.out.println("bno: "+i.getBno()+", title : "+i.getTitle()+", replies : "+i.getReplies().size());
		});
		System.out.println("=====test end=====");
	}
	@Transactional
	@Test
	public void findOneBoard(){
		System.out.println("=======test ====");
		Optional<Board> b=board_repo.findById(174L);
		System.out.println(b.get());
		List<Reply> list= b.get().getReplies();

		System.out.println("list: "+list.size());
		
	}
	@Test
	public void findOneReply(){
		System.out.println("=====test start=====");
		Optional<Reply> r=reply_repo.findById(1L);
		System.out.println(r.get());
	}
}
