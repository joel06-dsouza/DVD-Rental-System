package in.mindcraft.controllers;

import org.springframework.stereotype.Service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

@Service
public class DvdService {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DvdService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Map<String, Object>> fetchfilmFromDatabase() {
        String sql = "SELECT film_id, title, description, release_year, language_id, rental_duration, rental_rate, length, rating FROM film";
        return jdbcTemplate.queryForList(sql);
    }

    public List<Map<String, Object>> fetchactorFromDatabase() {
        String sql = "SELECT * FROM actor";
        return jdbcTemplate.queryForList(sql);
    }

    public List<Map<String, Object>> fetchFilmDataByFilmId(int filmId) {
        String sql = "SELECT * FROM Search_by_film_id WHERE film_id = ?";
        return jdbcTemplate.queryForList(sql, filmId);
    }

    
}
