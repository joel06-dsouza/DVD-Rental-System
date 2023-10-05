package in.mindcraft.trialDVD;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController{

  //  @GetMapping("/hello")
    @RequestMapping("/hello")
    public String sayHello() {
        return "Hello, World!";
    }
}