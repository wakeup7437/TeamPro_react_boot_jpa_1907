package team.lol.backend.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import team.lol.backend.entities.Board;

/**
 * BoardRepository
 */
public interface BoardRepository extends PagingAndSortingRepository<Board,Long>{

    
}