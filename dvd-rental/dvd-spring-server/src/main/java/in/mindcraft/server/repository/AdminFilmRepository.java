package in.mindcraft.server.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.mindcraft.server.pojos.AdminFilmInfo;

@Repository

public interface AdminFilmRepository extends JpaRepository<AdminFilmInfo, Long> {
    List<AdminFilmInfo> findByStoreId(Long storeId);
}


