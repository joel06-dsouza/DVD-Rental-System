package in.mindcraft.server.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.criteria.CriteriaBuilder.In;

@Entity
@Table(name = "allfilms_bycategory")
public class CustAllFilmInfo {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "id")
private Long id;

@Column(name = "store_id")
private Long  store_id;

@Column(name = "title")
private  String title;

@Column(name = "description")
private  String description;

@Column(name = "language_name")
private String language_name;

@Column(name = "length")
private Integer length;

@Column(name = "rating")
private String rating;

@Column(name = "rental_duration")
private Integer rental_duration;

@Column(name = "rental_rate")
private Double rental_rate;


@Column(name = "release_year")
private Integer release_year;

@Column(name = "category_name")
private String category_name;


public CustAllFilmInfo(){

}

public CustAllFilmInfo(Long store_id, Long film_id, String title, String description, String language_name,
        Integer length, String rating, Integer rental_duration, Double rental_rate, Integer release_year,
        String category_name) {
    this.store_id = store_id;
    this.id = id;
    this.title = title;
    this.description = description;
    this.language_name = language_name;
    this.length = length;
    this.rating = rating;
    this.rental_duration = rental_duration;
    this.rental_rate = rental_rate;
    this.release_year = release_year;
    this.category_name = category_name;
}

public Long getStore_id() {
    return store_id;
}

public void setStore_id(Long store_id) {
    this.store_id = store_id;
}

public Long getid() {
    return id;
}

public void setid(Long id) {
    this.id = id;
}

public String getTitle() {
    return title;
}

public void setTitle(String title) {
    this.title = title;
}

public String getDescription() {
    return description;
}

public void setDescription(String description) {
    this.description = description;
}

public String getLanguage_name() {
    return language_name;
}

public void setLanguage_name(String language_name) {
    this.language_name = language_name;
}

public Integer getLength() {
    return length;
}

public void setLength(Integer length) {
    this.length = length;
}

public String getRating() {
    return rating;
}

public void setRating(String rating) {
    this.rating = rating;
}

public Integer getRental_duration() {
    return rental_duration;
}

public void setRental_duration(Integer rental_duration) {
    this.rental_duration = rental_duration;
}

public Double getRental_rate() {
    return rental_rate;
}

public void setRental_rate(Double rental_rate) {
    this.rental_rate = rental_rate;
}

public Integer getRelease_year() {
    return release_year;
}

public void setRelease_year(Integer release_year) {
    this.release_year = release_year;
}

public String getCategory_name() {
    return category_name;
}

public void setCategory_name(String category_name) {
    this.category_name = category_name;
}





}
