package in.mindcraft.trialDVD.Staff.Actor;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ActorsRepository extends JpaRepository<ActorsInfo, Long> {
	@Query("SELECT a.actors FROM ActorsInfo a WHERE a.id = :filmId")
	List<String> findActorsByFilmId(@Param("filmId") Long filmId);
}
