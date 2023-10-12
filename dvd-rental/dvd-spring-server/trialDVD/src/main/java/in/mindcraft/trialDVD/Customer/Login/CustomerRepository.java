package in.mindcraft.trialDVD.Customer.Login;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<CustomerInfo, Long> {

    List<CustomerInfo> findByName(String name);

 
}

