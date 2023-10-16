package in.mindcraft.trialDVD.Staff.Film;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface FilmInfoRepository extends JpaRepository<FilmInfo, Long> {
    List<FilmInfo> findByStoreId(Long storeId);
}




