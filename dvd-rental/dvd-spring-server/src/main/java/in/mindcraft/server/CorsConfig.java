/* <<<<<<<< HEAD:dvd-rental/dvd-spring-server/src/main/java/in/mindcraft/server/CorsConfig.java
 */
package in.mindcraft.server;

/* package in.mindcraft.server.config;
 */
/* >>>>>>>> f39ecf6634cca2c99849ee8bd51a96844694f2c6:dvd-rental/dvd-spring-server/src/main/java/in/mindcraft/server/config/CorsConfig.java
 */
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:4200") // Allow requests from this origin
            .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
            .allowedHeaders("*") // Allowed headers (you can customize this)
            .allowCredentials(true); // Allow cookies if your application uses them

     
        
    }
}
