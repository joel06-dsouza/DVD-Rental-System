package in.mindcraft.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import in.mindcraft.server.pojos.CustomerFilmInfo;

import java.util.List;

public interface CustomerFilmRepository extends JpaRepository<CustomerFilmInfo, Integer> {
    List<CustomerFilmInfo> findByCustomerId(Integer customerId);

    // @Query("SELECT f FROM FilmInfo f WHERE f.customerId = :customerId")
    // List<CustomerFilmInfo> findFilmsByCustomerId(@Param("customerId") Integer customerId);
    @Query("SELECT f FROM CustomerFilmInfo f WHERE f.customerId = :customerId")
List<CustomerFilmInfo> findFilmsByCustomerId(@Param("customerId") Integer customerId);

}
