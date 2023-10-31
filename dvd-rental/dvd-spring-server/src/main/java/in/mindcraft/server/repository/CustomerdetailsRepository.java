package in.mindcraft.server.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import in.mindcraft.server.pojos.CustomerdetailsInfo;

public interface CustomerdetailsRepository extends JpaRepository<CustomerdetailsInfo, Integer>{
     @Query("SELECT cd FROM CustomerdetailsInfo cd WHERE cd.id= :customerId")
    List<CustomerdetailsInfo> findByCustomerId(@Param("customerId") Integer customerId);
}