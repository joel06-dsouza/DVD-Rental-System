package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;



@RestController
@RequestMapping("/health")

public class HealthCheckController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/database")
    public String checkDatabaseConnection() {
        try {
            String databaseUrl = jdbcTemplate.getDataSource().getConnection().getMetaData().getURL();
            return "Successfully connected to the database: " + databaseUrl;
        } catch (Exception e) {
            e.printStackTrace();
            return "Database connection failed!";
        }
    }

}
