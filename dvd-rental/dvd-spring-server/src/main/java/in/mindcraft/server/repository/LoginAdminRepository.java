package in.mindcraft.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import in.mindcraft.server.pojos.LoginAdminInfo;

public interface LoginAdminRepository extends JpaRepository<LoginAdminInfo, Long> {
    @Query("SELECT a FROM LoginAdminInfo a WHERE a.username = :username AND a.password = :password")
    LoginAdminInfo findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
}
