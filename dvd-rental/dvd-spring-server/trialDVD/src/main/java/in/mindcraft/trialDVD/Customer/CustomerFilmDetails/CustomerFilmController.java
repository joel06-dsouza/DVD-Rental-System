package in.mindcraft.trialDVD.Customer.CustomerFilmDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
