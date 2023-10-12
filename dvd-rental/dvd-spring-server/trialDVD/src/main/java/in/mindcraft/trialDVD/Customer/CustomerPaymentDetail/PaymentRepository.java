package in.mindcraft.trialDVD.Customer.CustomerPaymentDetail;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PaymentRepository extends JpaRepository<PaymentInfo, Integer> {
    

    @Query("SELECT p FROM PaymentInfo p WHERE p.customerId = :customerId")
    List<PaymentInfo> findAllByCustomerId(@Param("customerId") int customerId);
}
