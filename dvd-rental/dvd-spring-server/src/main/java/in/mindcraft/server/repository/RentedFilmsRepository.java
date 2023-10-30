package in.mindcraft.server.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.mindcraft.server.pojos.RentedFilm;

@Repository
public interface RentedFilmsRepository extends JpaRepository<RentedFilm, Long> {
    List<RentedFilm> findByCustomerId(Long customerId);
}
