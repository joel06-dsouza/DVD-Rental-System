package in.mindcraft.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import in.mindcraft.server.pojos.PaginationInfo;

public interface PaginationRepository extends JpaRepository<PaginationInfo, Long> {

    Page<PaginationInfo> findAll(Pageable pageable);
}
