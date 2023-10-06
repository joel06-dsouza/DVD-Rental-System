package in.mindcraft.trialDVD.Admin;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class StoreController {
    private final StoreRepository storeRepository;

    @Autowired
    public StoreController(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    @PostMapping("/stores")
    public ResponseEntity<List<StoreInfo>> getStoreById(@RequestBody Map<String, Long> request) {
        Long storeId = request.get("storeId");
        if (storeId == null) {
            return ResponseEntity.badRequest().build();
        }
    
        List<StoreInfo> storeInfoList = storeRepository.findByStoreId(storeId);
        if (storeInfoList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(storeInfoList);
    }

   
}
    


