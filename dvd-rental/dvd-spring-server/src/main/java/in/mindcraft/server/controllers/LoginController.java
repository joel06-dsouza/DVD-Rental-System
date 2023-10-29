package in.mindcraft.server.controllers;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.mindcraft.server.pojos.*;
import in.mindcraft.server.repository.*;
import in.mindcraft.server.services.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController {

    private final LoginService login;
    private final JwtService jwtUtil;
    private final LoginAdminRepository loginAdminRepository;
    private final LoginStaffRepository loginStaffRepository;
    private final LoginCustomerRepository loginCustomerRepository;

    @Autowired
    public LoginController(LoginService login,JwtService jwtUtil, LoginAdminRepository loginAdminRepository,LoginStaffRepository loginStaffRepository, LoginCustomerRepository loginCustomerRepository) {
        this.login = login;
        this.jwtUtil = jwtUtil; 
        this.loginAdminRepository = loginAdminRepository;
        this.loginStaffRepository = loginStaffRepository;
        this.loginCustomerRepository = loginCustomerRepository;
    }
 
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody UserInfo user) {
        Map<String, String> response = login.loginCheck(user);
    
        if ("success".equals(response.get("status"))) {
            System.out.println("sucess");
            String role = response.get("role");
            final String token = jwtUtil.generateToken(user.getName(), role);
            response.put("token", token);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @PostMapping("/admin/login")
    public ResponseEntity<Map<String, Object>> loginAdmin(@RequestBody Map<String, String> request) {
    // string role= admin
    
    String username = request.get("username");
    String password = request.get("password");
    // long storeId=1;
    
    if (username == null || password == null) {
       
        return ResponseEntity.badRequest().body(null); 
    }

    LoginAdminInfo admin = loginAdminRepository.findByUsernameAndPassword(username, password);

    if (admin != null) {
      
        // String token = JwtService.generateToken(username,storeId);
        String adminFullName = admin.getFirst_name() + " " + admin.getLast_name();
        System.out.println(adminFullName);
        Map<String, Object> response = new HashMap<>();
        System.out.println(response);
        // response.put("jwtToken", token);
        response.put("adminFullName", adminFullName);
        // response.put("adminId", admin.getId()); 
        
        return ResponseEntity.ok(response);
    } else {
       
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null); 
    } 

    }

    @PostMapping("/Staff/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");
       
        // Find all Staff with the given username
        List<LoginStaffInfo> staffList = loginStaffRepository.findAllByUsername(username);
        // String msg = "login success";

        for (LoginStaffInfo staff : staffList) {
            if (staff.getPassword().equals(password)) {
                long S_id = staff.getStoreId();
                // String token = jwtTokenProvider.generateToken(username, S_id);
                String S_fullName = staff.getFirstName() + " " + staff.getLastName();
                String S_email = staff.getEmail();


                // JwtToken jwtToken = new JwtToken();
                // jwtToken.setJwtToken(token);
                Map<String, Object> response = new HashMap<>();
                response.put("storeId", S_id);
                response.put("fullName", S_fullName);
                // response.put("jwtToken", jwtToken);
                response.put("email", S_email);
                System.out.println("Full Name: " + S_fullName);
                // Assuming getStoreId() is the getter method for storeId
                System.out.println("Store ID " + S_id);
                // System.out.println("jwtToke" +jwtToken);
                System.out.println("Email"+S_email);
                return ResponseEntity.ok(response);
            }
        }

        // If no matching user was found, return an error response
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/Customer/login")
    public ResponseEntity<Map<String, Object>> loginCustomer(@RequestBody Map<String, String> request) {
    String username = request.get("username");
    String password = request.get("password");

        if (username == null || password == null) {
            return ResponseEntity.badRequest().body(null);
        }

        List<LoginCustomerInfo> customers = loginCustomerRepository.findByUsernameAndPassword(username, password);

        for (LoginCustomerInfo customer : customers) {
            if (customer.getPassword().equals(password)) {
            // Handle successful login
            long C_id = customer.getId();
            String C_Name = customer.getName(); 

            Map<String, Object> response = new HashMap<>();
            response.put("id",C_id);
            response.put("name",C_Name);

            return ResponseEntity.ok(response);
            } else {
            // Handle failed login
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
            }
        }
        return ResponseEntity.notFound().build();
    }
}


