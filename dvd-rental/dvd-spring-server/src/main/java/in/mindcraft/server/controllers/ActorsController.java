package in.mindcraft.server.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import in.mindcraft.server.repository.ActorsRepository;

@RestController
@RequestMapping("Staff")
public class ActorsController {
    @Autowired
    private ActorsRepository actorsRepository; 
    
    @PostMapping("/actors")
    public ResponseEntity<List<String>> getActorsByFilmIdWithRequestBody(@RequestBody Map<String, Object> request) {
        Object filmIdObject = request.get("filmId");

        if (filmIdObject == null) {
            return ResponseEntity.badRequest().build();
        }

        try {
            Long filmId = Long.parseLong(filmIdObject.toString());
            List<String> actors = actorsRepository.findActorsByFilmId(filmId);

            if (actors != null && !actors.isEmpty()) {
                return ResponseEntity.ok(actors);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (NumberFormatException e) {
            // Handle the case where 'filmId' cannot be parsed as a Long
            return ResponseEntity.badRequest().build();
        }
    }


}
