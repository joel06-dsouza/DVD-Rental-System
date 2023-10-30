package in.mindcraft.server.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.mindcraft.server.pojos.RentedFilm;
import in.mindcraft.server.repository.RentedFilmsRepository;

@RestController
@RequestMapping("/rented-films")
public class RentedFilmsController {

    @Autowired
    private RentedFilmsRepository rentedFilmsRepository;

    @PostMapping("/customer/{customerId}")
    public ResponseEntity<List<RentedFilm>> getRentedFilmsByCustomer(@PathVariable Long customerId) {
        List<RentedFilm> rentedFilms = rentedFilmsRepository.findByCustomerId(customerId);
        if (rentedFilms.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(rentedFilms, HttpStatus.OK);
        }
    }
}