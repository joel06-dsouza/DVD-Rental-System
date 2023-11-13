package in.mindcraft.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import in.mindcraft.server.pojos.LoginCustomerInfo;

public interface LoginCustomerRepository extends JpaRepository<LoginCustomerInfo, Long> {

    @Query("SELECT c FROM LoginCustomerInfo c WHERE c.username = :username AND c.password = :password")
    List<LoginCustomerInfo> findByUsernameAndPassword(@Param("username")String username, @Param("password")String password);
}
