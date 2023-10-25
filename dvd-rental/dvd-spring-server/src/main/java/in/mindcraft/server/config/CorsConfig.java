package in.mindcraft.server.config;

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
        // registry.addMapping("/**")
        //     .allowedOrigins("http://localhost:4200") // Allow requests from this origin
        //     .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
        //     .allowedHeaders("*") // Allowed headers (you can customize this)
        //     .allowCredentials(true); // Allow cookies if your application uses them

        registry.addMapping("/Staff/login")
            .allowedOrigins("http://localhost:4200") // Allow requests from this origin
            .allowedMethods("GET", "POST") // Allowed HTTP methods
            .allowedHeaders("*") // Allowed headers (you can customize this)
            .allowCredentials(true);

        registry.addMapping("/admin/login")
            .allowedOrigins("http://localhost:4200") // Allow requests from this origin
            .allowedMethods("GET", "POST") // Allowed HTTP methods
            .allowedHeaders("*") // Allowed headers (you can customize this)
            .allowCredentials(true);
        
    }
}
