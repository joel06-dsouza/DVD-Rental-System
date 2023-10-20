package in.mindcraft.server.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.mindcraft.server.pojos.AdminFilmInfo;
import in.mindcraft.server.repository.AdminFilmRepository;

@RestController
@RequestMapping("admin")
public class AdminFilmController {
    private final AdminFilmRepository filmRepository;

    @Autowired
    public AdminFilmController(AdminFilmRepository filmRepository) {
        this.filmRepository = filmRepository;
    }

    @PostMapping("/filmByStoreId")
    public ResponseEntity<?> getAllFilmInfoByStoreId(@RequestBody Map<String, Object> request) {
    Object storeIdObject = request.get("storeId");
    if (storeIdObject == null) {
        return ResponseEntity.badRequest().body("Missing 'storeId' parameter");
    }

    try {
        Long storeId = Long.parseLong(storeIdObject.toString());
        List<AdminFilmInfo> filmInfoList = filmRepository.findByStoreId(storeId);

        if (filmInfoList.isEmpty()) {
            return ResponseEntity.notFound().build(); // Handle the case where no data is found
        }

        return ResponseEntity.ok(filmInfoList);
    } catch (NumberFormatException e) {
        return ResponseEntity.badRequest().body("Invalid 'storeId' value");
    }
}

}
