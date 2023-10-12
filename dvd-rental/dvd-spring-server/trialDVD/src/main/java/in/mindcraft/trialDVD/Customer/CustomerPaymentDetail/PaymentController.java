package in.mindcraft.trialDVD.Customer.CustomerPaymentDetail;

// package in.mindcraft.trialDVD.Payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/Customer")
public class PaymentController {

    private final PaymentRepository paymentRepository;

    @Autowired
    public PaymentController(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    @PostMapping("/Payments")
    public ResponseEntity<List<PaymentInfo>> getPaymentsByCustomerId(@RequestBody Map<String, Integer> request) {
        Integer customerId = request.get("customer_id");
        if (customerId == null) {
            return ResponseEntity.badRequest().build();
        }

        List<PaymentInfo> paymentInfoList = paymentRepository.findAllByCustomerId(customerId);
        if (paymentInfoList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(paymentInfoList);
    }
}
