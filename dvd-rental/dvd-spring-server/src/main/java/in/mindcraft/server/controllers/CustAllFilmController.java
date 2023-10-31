package in.mindcraft.server.controllers;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.mindcraft.server.pojos.CustAllFilmInfo;
import in.mindcraft.server.repository.CustAllFilmRepo;

@RestController
@RequestMapping("/Customer")
public class CustAllFilmController {

    private final CustAllFilmRepo CustAllFilmRepo;

    @Autowired
    public CustAllFilmController(CustAllFilmRepo custAllFilmRepo){
        this.CustAllFilmRepo = custAllFilmRepo;

    }

    @PostMapping("/filmByCategory")
    public ResponseEntity<List<CustAllFilmInfo>> getFilmDetailsByCategoryName(@RequestBody Map<String, String> request){
        String category_name = request.get("category_name");
        if (category_name == null){
            return ResponseEntity.badRequest().build();
        }
         List<CustAllFilmInfo> allfilmDetailsList = CustAllFilmRepo.findByCategoryName(category_name);
        if (allfilmDetailsList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(allfilmDetailsList);
    } 
    }
    

