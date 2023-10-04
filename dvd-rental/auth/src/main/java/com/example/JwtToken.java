package com.example;

import lombok.Data;

@Data
public class JwtToken {

    
    private String jwtToken;
    
    // Getter for jwtToken
    public String getJwtToken() {
        return jwtToken;
    }

    // Setter for jwtToken
    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
