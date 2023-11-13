package in.mindcraft.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import in.mindcraft.server.pojos.CustAllFilmInfo;
import java.util.List;


public interface CustAllFilmRepo extends JpaRepository<CustAllFilmInfo, Long>{
    @Query("SELECT c FROM CustAllFilmInfo c WHERE c.category_name = :category_name")
    List<CustAllFilmInfo> findByCategoryName(@Param("category_name")String category_name);
}
