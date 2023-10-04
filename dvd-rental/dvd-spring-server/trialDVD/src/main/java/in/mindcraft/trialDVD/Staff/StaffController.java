package in.mindcraft.trialDVD.Staff;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Staff")
public class StaffController {
	public long S_id;
    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider; // Inject the JWT token provider

    @GetMapping("/allStaff")
    public List<Staff> getAllStaff() {
        return staffRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Staff> getStaffById(@PathVariable Long id) {
        Optional<Staff> staff = staffRepository.findById(id);

        if (staff.isPresent()) {
            return ResponseEntity.ok(staff.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    
    // @GetMapping("/login")
    // public ResponseEntity<Long> login(@RequestParam String username, @RequestParam String password) {
    //     // Find all Staff with the given username
    //     List<Staff> staffList = staffRepository.findAllByUsername(username);
    //     String msg = "login success";

    //     for (Staff staff : staffList) {
    //         if (staff.getPassword().equals(password)) {
    //             long S_id = staff.getStoreId(); // Assuming getStoreId() is the getter method for storeId
    //             System.out.println("Store ID "+S_id);
    //             return ResponseEntity.ok(S_id);
    //         }
    //     }



    //     // If no matching user was found, return an error response
    //     return ResponseEntity.notFound().build();
    // }
    

//    @GetMapping("/allFilmInfo")
//    public ResponseEntity<List<FilmInfo>> getAllFilmInfo() {
//        List<FilmInfo> filmInfoList = staffRepository.findAllFilmInfo();
//
//        if (!filmInfoList.isEmpty()) {
//            return ResponseEntity.ok(filmInfoList);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
//    
//    @PostMapping("/login")
//    public ResponseEntity<Map<String, Object>> login(@RequestParam String username, @RequestParam String password) {
//        // Find all Staff with the given username
//        List<Staff> staffList = staffRepository.findAllByUsername(username);
//        String msg = "login success";
//
//        for (Staff staff : staffList) {
//            if (staff.getPassword().equals(password)) {
//                long S_id = staff.getStoreId();
//                String S_fullName = staff.getFirstName() + " " + staff.getLastName();
//                
//                Map<String, Object> response = new HashMap<>();
//                response.put("storeId", S_id);
//                response.put("fullName", S_fullName);
//
//                System.out.println("Full Name: " + S_fullName);
//                // Assuming getStoreId() is the getter method for storeId
//                System.out.println("Store ID " + S_id);
//                
//                return ResponseEntity.ok(response);
//            }
//        }
//
//        // If no matching user was found, return an error response
//        return ResponseEntity.notFound().build();
//    }
    
    
//
//    @RequestMapping(value = "/login", method = { RequestMethod.GET, RequestMethod.POST })	
//    public ResponseEntity<Map<String, Object>> login(@RequestParam String username, @RequestParam String password) {
//        // Find all Staff with the given username
//        List<Staff> staffList = staffRepository.findAllByUsername(username);
//        String msg = "login success";
//
//        for (Staff staff : staffList) {
//            if (staff.getPassword().equals(password)) {
//                long S_id = staff.getStoreId();
//                String S_fullName = staff.getFirstName() + " " + staff.getLastName();
//
//                Map<String, Object> response = new HashMap<>();
//                response.put("storeId", S_id);
//                response.put("fullName", S_fullName);
//
//                System.out.println("Full Name: " + S_fullName);
//                // Assuming getStoreId() is the getter method for storeId
//                System.out.println("Store ID " + S_id);
//
//                return ResponseEntity.ok(response);
//            }
//        }
//
//        // If no matching user was found, return an error response
//        return ResponseEntity.notFound().build();
//    }
    

    // @PostMapping("/login")
    // public ResponseEntity<JwtToken> login(@RequestParam String username, @RequestParam String password) {
    //     // Find all Staff with the given username
    //     List<Staff> staffList = staffRepository.findAllByUsername(username);

    //     for (Staff staff : staffList) {
    //         if (staff.getPassword().equals(password)) {
    //             long storeId = staff.getStoreId();

    //             // Generate a JWT token including additional claims
    //             String token = jwtTokenProvider.generateToken(username, storeId);

    //             // Create a JwtToken object to hold the token and additional information
    //             JwtToken jwtToken = new JwtToken();
    //             jwtToken.setJwtToken(token);
    //             // jwtToken.setAccountType("Saving Account"); // Add additional information

    //             // Return the JwtToken object as a response
    //             return ResponseEntity.ok(jwtToken);
    //         }
    //     }

    //     // If no matching user was found, return an error response
    //     return ResponseEntity.notFound().build();
    // }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");
       
        // Find all Staff with the given username
        List<Staff> staffList = staffRepository.findAllByUsername(username);
        String msg = "login success";

        for (Staff staff : staffList) {
            if (staff.getPassword().equals(password)) {
                long S_id = staff.getStoreId();
                String token = jwtTokenProvider.generateToken(username, S_id);
                String S_fullName = staff.getFirstName() + " " + staff.getLastName();

                 JwtToken jwtToken = new JwtToken();
                 jwtToken.setJwtToken(token);
                Map<String, Object> response = new HashMap<>();
                response.put("storeId", S_id);
                response.put("fullName", S_fullName);
                response.put("jwtToken", jwtToken);
                System.out.println("Full Name: " + S_fullName);
                // Assuming getStoreId() is the getter method for storeId
                System.out.println("Store ID " + S_id);
                System.out.println("jwtToke" +jwtToken);
                return ResponseEntity.ok(response);
            }
        }

        // If no matching user was found, return an error response
        return ResponseEntity.notFound().build();
    }
}


    

