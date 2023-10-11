package in.mindcraft.trialDVD.Jwt;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    // @Override
    // public void commence(HttpServletRequest request,
    //                      HttpServletResponse response,
    //                      AuthenticationException authException) throws IOException, ServletException {
    //     // This method is called when a user tries to access a secured resource without proper authentication.
    //     // You can customize the behavior here, such as returning an HTTP 401 Unauthorized response.

    //     // response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
    // }

    @Override
    public void commence(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response,
            AuthenticationException authException) throws IOException, javax.servlet.ServletException {
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'commence'");
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");

    }
}
