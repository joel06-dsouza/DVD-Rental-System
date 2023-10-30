package in.mindcraft.server.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.mindcraft.server.pojos.StaffInfo;
import in.mindcraft.server.repository.AdminStaffRepository;

@RestController
@RequestMapping("/admin")
public class AdminStaffController {
    private final AdminStaffRepository adminStaffRepository; // Updated repository name

    @Autowired
    public AdminStaffController(AdminStaffRepository adminStaffRepository) { // Updated constructor parameter
        this.adminStaffRepository = adminStaffRepository;
    }

    @PostMapping("/staffdetails")
    public ResponseEntity<List<StaffInfo>> getStaffByStoreId(@RequestBody Map<String, Long> request) {
        Long staffId = request.get("staffId"); // Updated variable name
        if (staffId == null) {
            return ResponseEntity.badRequest().build();
        }

        List<StaffInfo> staffInfoList = adminStaffRepository.findByStaffId(staffId); // Updated repository name
        if (staffInfoList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(staffInfoList);
    }
}
