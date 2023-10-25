package in.mindcraft.trialDVD.Customer.CustomerDetails;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/Customer")
public class CustomerdetailsController {
    private final CustomerdetailsRepository customerdetailsRepository;

    @Autowired
    public CustomerdetailsController(CustomerdetailsRepository customerdetailsRepository){
        this.customerdetailsRepository= customerdetailsRepository;
    }

    @PostMapping("/customerdetails")
        public ResponseEntity<List<CustomerdetailsInfo>> getCustomerByCustomerId(@RequestBody Map<String, Integer> request) {
        Integer customerId = request.get("customerId");
        if (customerId == null) {
            return ResponseEntity.badRequest().build();
        }

        List<CustomerdetailsInfo> customerdetailsInfoList = customerdetailsRepository.findByCustomerId(customerId);
        if (customerdetailsInfoList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(customerdetailsInfoList);
    }
}