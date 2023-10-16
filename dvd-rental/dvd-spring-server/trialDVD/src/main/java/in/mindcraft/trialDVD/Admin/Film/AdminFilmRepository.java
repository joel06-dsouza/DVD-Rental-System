package in.mindcraft.trialDVD.Admin.Film;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface AdminFilmRepository extends JpaRepository<AdminFilmInfo, Long> {
    List<AdminFilmInfo> findByStoreId(Long storeId);
}


