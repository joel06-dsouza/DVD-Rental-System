package in.mindcraft.trialDVD.Admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<LoginInfo, Long> {
    @Query("SELECT l FROM LoginInfo l WHERE l.username = :username AND l.password = :password")
    LoginInfo findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
}
