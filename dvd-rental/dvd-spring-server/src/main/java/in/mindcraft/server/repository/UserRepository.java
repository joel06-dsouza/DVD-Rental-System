package in.mindcraft.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.mindcraft.server.pojos.UserInfo;

@Repository
public interface UserRepository extends JpaRepository<UserInfo, Integer > {
    // Define custom query methods if needed
   UserInfo findByUsername(String username);
}

