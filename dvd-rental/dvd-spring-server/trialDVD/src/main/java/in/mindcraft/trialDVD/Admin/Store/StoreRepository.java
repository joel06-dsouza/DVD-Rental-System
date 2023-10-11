package in.mindcraft.trialDVD.Admin.Store;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StoreRepository extends JpaRepository<StoreInfo, Long> {
    @Query("SELECT si FROM StoreInfo si WHERE si.id = :storeId")
    List<StoreInfo> findByStoreId(@Param("storeId") Long storeId);
}
