package in.mindcraft.server.controllers;

import java.util.List;
import java.util.Map;
import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import in.mindcraft.server.pojos.FilmInfo;
import in.mindcraft.server.repository.FilmInfoRepository;



@RestController
@RequestMapping("Staff")
public class FilmInfoController {
    private final FilmInfoRepository filmInfoRepository;
    // private StaffController staffController;

    @Autowired
    public FilmInfoController(FilmInfoRepository filmInfoRepository) {
        this.filmInfoRepository = filmInfoRepository;
    }

//    @PostMapping("/filmlist")
    @RequestMapping(value = "/filmlist", method = { RequestMethod.GET, RequestMethod.POST })
    public List<FilmInfo> getAllFilmInfo() {
    	
        return filmInfoRepository.findAll();
    }
    
    
    
    // @PostMapping("/filmByStoreId")
    // public ResponseEntity<List<FilmInfo>> getAllFilmInfoByStoreId(@RequestBody Map<String, Object> request) {
    //     Object storeIdObject = request.get("storeId");
        
    //     if (storeIdObject == null) {
    //         // Handle the case where 'storeId' is not provided in the request
    //         return ResponseEntity.badRequest().body(null); // You can customize this response as needed
    //     }

    //     try {
    //         Long storeId = Long.parseLong(storeIdObject.toString());
    //         List<FilmInfo> filmInfoList = filmInfoRepository.findByStoreId(storeId);
    //         return ResponseEntity.ok(filmInfoList);
    //     } catch (NumberFormatException e) {
    //         // Handle the case where 'storeId' cannot be parsed as a Long
    //         return ResponseEntity.badRequest().body(null); // You can customize this response as needed
    //     }
    // }




    @PostMapping("/filmByPagination")
    public ResponseEntity<Page<FilmInfo>> getFilmInfoByStoreId(
        @RequestBody Map<String, String> request,
        @RequestParam(name = "page", defaultValue = "1") int page,
    @RequestParam(name = "size", defaultValue = "10") int size
       
    ) {
        Object storeIdObject = request.get("storeId");
        Object pageObject = request.get("page");
        Object sizeObject = request.get("size");


        if (storeIdObject == null) {
            return ResponseEntity.badRequest().body(null);
        }

        try {
            Long storeId = Long.parseLong(storeIdObject.toString());
            int Page = Integer.parseInt(pageObject.toString());
            int Size = Integer.parseInt(sizeObject.toString());

            Pageable pageable = PageRequest.of(Page -1, Size);
            Page<FilmInfo> filmInfoPage = filmInfoRepository.findByStoreId(storeId, pageable);

            return ResponseEntity.ok(filmInfoPage);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

   
}