package in.mindcraft.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import in.mindcraft.server.pojos.StaffInfo;

public interface AdminStaffRepository extends JpaRepository<StaffInfo, Long>{
    @Query("SELECT sd FROM StaffInfo sd WHERE sd.id= :staffId")
    List<StaffInfo> findByStaffId(@Param("staffId") Long staffId);
}
