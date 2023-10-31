package in.mindcraft.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import in.mindcraft.server.pojos.CustRentedFilmInfo;

@Repository
public interface CustRentedFilmRepo extends JpaRepository<CustRentedFilmInfo, Long>{
    @Query("SELECT c FROM CustRentedFilmInfo c WHERE c.category_name = :category_name and c.customer_id= :customer_id")
    List<CustRentedFilmInfo> findByCategoryNameandCustId(@Param("category_name") String category_name, @Param("customer_id") String customer_id);
}