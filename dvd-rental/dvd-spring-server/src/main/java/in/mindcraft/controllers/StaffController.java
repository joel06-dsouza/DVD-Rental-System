package in.mindcraft.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/staff")
public class StaffController {
    @Autowired
    private StaffRepository staffRepository;

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
//    
   @GetMapping("/login")
   public ResponseEntity<Staff> login(@RequestParam String username, @RequestParam String password) {
       // First, find a Staff by username
       Staff staff = staffRepository.findByUsername(username);

       if (staff != null && staff.getPassword().equals(password)) {
           return ResponseEntity.ok(staff);
       } else {
           return ResponseEntity.notFound().build();
       }
   }
//
    // @PostMapping("/login")
    // public ResponseEntity<Staff> login(@RequestParam String username, @RequestParam String password) {
    //     // First, find a Staff by username
    //     Staff staff = staffRepository.findByUsername(username);
    //     String msg = "login success";

    //     if (staff != null && staff.getPassword().equals(password)) {
    //         return ResponseEntity.ok(staff);
    //     } else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }
}
