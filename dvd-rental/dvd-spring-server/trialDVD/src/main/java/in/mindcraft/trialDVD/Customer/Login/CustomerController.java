package in.mindcraft.trialDVD.Customer.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Collections; // Import java.util.Collections

@RestController
@RequestMapping("Customer")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping
    public List<CustomerInfo> getAllCustomers() {
        return customerRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerInfo> getCustomerById(@PathVariable Long id) {
        CustomerInfo customer = customerRepository.findById(id).orElse(null);
        if (customer != null) {
            return ResponseEntity.ok(customer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/login/{name}")
    public List<CustomerInfo> getCustomersByName(@PathVariable String name) {
        List<CustomerInfo> customers = customerRepository.findByName(name);
        if (!customers.isEmpty()) {
            return customers;
        } else {
            return Collections.emptyList(); // Use java.util.Collections.emptyList()
        }
    }

    @PostMapping
    public ResponseEntity<CustomerInfo> createCustomer(@RequestBody CustomerInfo customer) {
        CustomerInfo savedCustomer = customerRepository.save(customer);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCustomer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomerInfo> updateCustomer(@PathVariable Long id, @RequestBody CustomerInfo customer) {
        if (customerRepository.existsById(id)) {
            customer.setId(id);
            CustomerInfo updatedCustomer = customerRepository.save(customer);
            return ResponseEntity.ok(updatedCustomer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        if (customerRepository.existsById(id)) {
            customerRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
