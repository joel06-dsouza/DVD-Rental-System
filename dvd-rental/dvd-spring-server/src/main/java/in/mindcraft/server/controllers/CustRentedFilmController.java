package in.mindcraft.server.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.mindcraft.server.pojos.CustRentedFilmInfo;
import in.mindcraft.server.repository.CustRentedFilmRepo;

@RestController
@RequestMapping("/Customer")
public class CustRentedFilmController {
    private final CustRentedFilmRepo custRentedFilmRepo;

    @Autowired
    public CustRentedFilmController(CustRentedFilmRepo custRentedFilmRepo){
        this.custRentedFilmRepo= custRentedFilmRepo;
    }

     @PostMapping("/RentedFilms")
    public ResponseEntity<List<CustRentedFilmInfo>> getFilmDetailsByCategoryNameandCustId(@RequestBody Map<String, String> request) {
        String category_name = request.get("category_name");
        String customer_id = request.get("customer_id");
        if (category_name == null || customer_id == null) {
            return ResponseEntity.badRequest().build();
        }

        List<CustRentedFilmInfo> allrentedfilmDetailsList = custRentedFilmRepo.findByCategoryNameandCustId(category_name, customer_id);
        if (allrentedfilmDetailsList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(allrentedfilmDetailsList);
    }
}
