package in.mindcraft.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.mindcraft.server.pojos.FilmInfo;

@Repository

public interface FilmInfoRepository extends JpaRepository<FilmInfo, Long> {
    List<FilmInfo> findByStoreId(Long storeId);
}




