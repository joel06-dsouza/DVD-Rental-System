package in.mindcraft.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import in.mindcraft.server.pojos.CustAllFilmInfo;

@Repository
public interface  CustAllFilmRepo extends JpaRepository<CustAllFilmInfo, Long> {
    @Query("SELECT c FROM CustAllFilmInfo c WHERE c.category_name = :category_name")
    List<CustAllFilmInfo> findByCategoryName(@Param("category_name") String category_name);
    
}
