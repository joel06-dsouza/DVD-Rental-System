package in.mindcraft.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DvdController {
    private final DvdService databaseService;

    @Autowired
	public DvdController(DvdService databaseService) {
		this.databaseService = databaseService;
		
	}
    //Test for Satvik
    @RequestMapping("films")
    public List<Map<String, Object>> getFilmData() {
        return databaseService.fetchfilmFromDatabase();
    }
	
    @RequestMapping("actors")
    public List<Map<String, Object>> getActorData() {
        return databaseService.fetchactorFromDatabase();
    }

}

