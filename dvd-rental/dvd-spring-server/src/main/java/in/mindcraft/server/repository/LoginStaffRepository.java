package in.mindcraft.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import in.mindcraft.server.pojos.LoginStaffInfo;

@Repository
public interface LoginStaffRepository extends JpaRepository<LoginStaffInfo, Long> {
	  LoginStaffInfo findByUsername(String username);

	List<LoginStaffInfo> findAllByUsername(String username);
	
	
}
