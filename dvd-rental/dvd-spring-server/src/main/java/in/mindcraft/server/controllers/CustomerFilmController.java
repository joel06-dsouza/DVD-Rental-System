package in.mindcraft.server .controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import in.mindcraft.server.pojos.CustomerFilmInfo;
import in.mindcraft.server.repository.CustomerFilmRepository;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/Customer")
public class CustomerFilmController {
    private final CustomerFilmRepository filmRepository;

    @Autowired
    public CustomerFilmController(CustomerFilmRepository filmRepository) {
        this.filmRepository = filmRepository;
    }

    @PostMapping("/Films")
    @PreAuthorize("hasRole('ROLE_CUSTOMER')")
    public ResponseEntity<List<CustomerFilmInfo>> getFilmsByCustomerId(@RequestBody Map<String, Integer> request) {
        Integer customerId = request.get("customer_id");
        if (customerId == null) {
            return ResponseEntity.badRequest().build();
        }

        List<CustomerFilmInfo> filmInfoList = filmRepository.findFilmsByCustomerId(customerId);

        if (filmInfoList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(filmInfoList);
    }
}
