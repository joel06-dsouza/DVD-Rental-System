package in.mindcraft.server.services;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import in.mindcraft.server.pojos.UserInfo;
import lombok.val;

@Service
public class LoginService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public LoginService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    
    public Map<String, String> loginCheck(UserInfo user) {
        String sql = "SELECT * FROM myusers WHERE username = ? ";
        System.out.println(user.getName());
        List<Map<String, Object>> result = jdbcTemplate.queryForList(sql, user.getName());
        System.out.println("Reached here");
        if (!result.isEmpty()) {
            System.out.println("Reached here 1");
            Map<String, String> response = new HashMap<>();
            String fetchRole = "SELECT role FROM myusers WHERE username = ?";
            List<Map<String,Object>> result1 = jdbcTemplate.queryForList(fetchRole, user.getName());
            System.out.println(result1);
            String fetchId = "SELECT staff_id FROM myusers WHERE username = ?";
            List<Map<String,Object>> result2 = jdbcTemplate.queryForList(fetchId, user.getName());
            System.out.println(result2);

            response.put("status", "success");
            response.put("message", "Login successful");
            response.put("role", result1.get(0).get("role").toString());
            response.put("staff_id", result2.get(0).get("staff_id").toString());
            
            return response;
        }
        Map<String, String> response = new HashMap<>();
        response.put("status", "error");
        response.put("message", "Login failed. Invalid username or password.");
        return response;
    }
}
