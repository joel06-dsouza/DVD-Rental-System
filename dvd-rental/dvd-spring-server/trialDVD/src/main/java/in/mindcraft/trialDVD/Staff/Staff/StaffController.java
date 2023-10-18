package in.mindcraft.trialDVD.Staff.Staff;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;


import in.mindcraft.trialDVD.Jwt.JwtToken;
import in.mindcraft.trialDVD.Jwt.JwtService;

// import in.mindcraft.trialDVD.enums.Role;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
// import java.util.Optional;

@RestController
@RequestMapping("/Staff")
public class StaffController {

    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private JwtService jwtTokenProvider;

    @PostMapping("/login")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        // Find all Staff with the given username
        List<Staff> staffList = staffRepository.findAllByUsername(username);
        
        for (Staff staff : staffList) {
            if (staff.getPassword().equals(password)) {
                long S_id = staff.getStoreId();
                String token;
                
                token = jwtTokenProvider.generateToken(username);

                // Set other response data as needed
                String S_fullName = staff.getFirstName() + " " + staff.getLastName();
                String S_email = staff.getEmail();

                JwtToken jwtToken = new JwtToken();
                jwtToken.setJwtToken(token);

                Map<String, Object> response = new HashMap<>();
                response.put("storeId", S_id);
                response.put("fullName", S_fullName);
                response.put("jwtToken", jwtToken);
                response.put("email", S_email);
                // response.put("role", Role.staff); // Include the user's role in the response

                return ResponseEntity.ok(response);
            }
        }

        // If no matching user was found, return an error response
        return ResponseEntity.notFound().build();
    }
}
