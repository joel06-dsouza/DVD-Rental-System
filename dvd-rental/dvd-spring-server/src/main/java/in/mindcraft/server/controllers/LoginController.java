package in.mindcraft.server.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.mindcraft.server.JwtUtil;
import in.mindcraft.server.pojos.UserInfo;
import in.mindcraft.server.services.LoginService;

import java.util.Map;

@RestController
public class LoginController {

    private final LoginService login;
    private final JwtUtil jwtUtil;

    @Autowired
    public LoginController(LoginService login,JwtUtil jwtUtil) {
        this.login = login;
        this.jwtUtil = jwtUtil;
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
    
}
