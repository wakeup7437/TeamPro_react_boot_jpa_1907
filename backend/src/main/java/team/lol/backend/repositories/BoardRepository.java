package team.lol.backend.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import team.lol.backend.entities.Board;

/**
 * BoardRepository
 */
public interface BoardRepository extends PagingAndSortingRepository<Board,Long>{

    //read
    public Page<Board> findByBnoGreaterThanOrderByBnoDesc(Long bno,Pageable page);

    
    public Board findByBno(Long bno);
}