package in.mindcraft.trialDVD.Staff.Staff;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long> {
	  Staff findByUsername(String username);

	List<Staff> findAllByUsername(String username);
	
}
