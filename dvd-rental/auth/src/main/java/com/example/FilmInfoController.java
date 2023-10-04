package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("Staff")
public class FilmInfoController {
    private final FilmInfoRepository filmInfoRepository;
    private StaffController staffController;

    @Autowired
    public FilmInfoController(FilmInfoRepository filmInfoRepository) {
        this.filmInfoRepository = filmInfoRepository;
    }

    @PostMapping("/filmlist")
    public List<FilmInfo> getAllFilmInfo() {

        return filmInfoRepository.findAll();
    }

    // @GetMapping("/filmByStoreId")
    // public List<FilmInfo> getAllFilmInfo(@RequestParam(name = "storeId") Long
    // storeId) {
    // return filmInfoRepository.findByStoreId(storeId);
    // }

    @GetMapping("/filmByStoreId")
    public List<FilmInfo> getAllFilmInfo(@RequestParam(name = "storeId") Long storeId) {
        try {
            System.out.println("Received storeId: " + storeId);
            List<FilmInfo> films = filmInfoRepository.findByStoreId(storeId);
            return films;
        } catch (Exception e) {
            e.printStackTrace();
            return Collections.emptyList(); // Handle the error gracefully
        }
    }

}
