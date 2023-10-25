package in.mindcraft.trialDVD.Customer.CustomerFilmDetails;

import jakarta.persistence.*;

@Entity
@Table(name = "customer_filmdetails")
public class CustomerFilmInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "film_id")
    private Integer filmId;

    @Column(name = "title")
    private String title;

     @Column(name = "customer_id")
    private Integer customerId;

    @Column(name = "description")
    private String description;

    @Column(name = "category")
    private String categoryName;

    @Column(name = "language")
    private String languageName;

    @Column(name = "length")
    private Integer length;

    @Column(name = "rating")
    private String rating;

    @Column(name = "rental_duration")
    private Integer rentalDuration;

    @Column(name = "rental_rate")
    private Double rentalRate;

    @Column(name = "release_year")
    private Integer releaseYear;

    @Column(name = "store_id")
    private Integer storeId;

    public CustomerFilmInfo() {}

    // public CustomerFilmInfo(Integer filmId, String title, String description, String categoryName, String languageName,
    //         Integer length, String rating, Integer rentalDuration, Double rentalRate, Integer releaseYear,
    //         Integer storeId) {
    //     this.filmId = filmId;
    //     this.title = title;
    //     this.description = description;
    //     this.categoryName = categoryName;
    //     this.languageName = languageName;
    //     this.length = length;
    //     this.rating = rating;
    //     this.rentalDuration = rentalDuration;
    //     this.rentalRate = rentalRate;
    //     this.releaseYear = releaseYear;
    //     this.storeId = storeId;
    // }

    
    public CustomerFilmInfo(Integer filmId, Integer customerId, String title, String description, String categoryName, String languageName,
                            Integer length, String rating, Integer rentalDuration, Double rentalRate, Integer releaseYear,
                            Integer storeId) {
        this.filmId = filmId;
        this.customerId = customerId;
        this.title = title;
        this.description = description;
        this.categoryName = categoryName;
        this.languageName = languageName;
        this.length = length;
        this.rating = rating;
        this.rentalDuration = rentalDuration;
        this.rentalRate = rentalRate;
        this.releaseYear = releaseYear;
        this.storeId = storeId;
    }


    public Integer getFilmId() {
        return filmId;
    }

    public void setFilmId(Integer filmId) {
        this.filmId = filmId;
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

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getLanguageName() {
        return languageName;
    }

    public void setLanguageName(String languageName) {
        this.languageName = languageName;
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

    public Integer getRentalDuration() {
        return rentalDuration;
    }

    public void setRentalDuration(Integer rentalDuration) {
        this.rentalDuration = rentalDuration;
    }

    public Double getRentalRate() {
        return rentalRate;
    }

    public void setRentalRate(Double rentalRate) {
        this.rentalRate = rentalRate;
    }

    public Integer getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(Integer releaseYear) {
        this.releaseYear = releaseYear;
    }

    public Integer getStoreId() {
        return storeId;
    }

    public void setStoreId(Integer storeId) {
        this.storeId = storeId;
    }

    public Integer getCustomerId() {
        return customerId;
    }
    
    // Setter for customerId
    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }
    

}
