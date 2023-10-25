package in.mindcraft.server.controllers;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import in.mindcraft.server.pojos.StoreInfo;
import in.mindcraft.server.repository.StoreRepository;

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
    @PreAuthorize("hasRole('ROLE_ADMIN')")
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
