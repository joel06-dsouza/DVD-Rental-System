package in.mindcraft.server.pojos;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "rented_films")
public class CustRentedFilmInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "film_id")
    private Long film_id;

@Column(name = "customer_id")
    private Long customer_id;

    

    @Column(name = "amount")
    private Integer amount;

    @Column(name = "payment_date")    
    private Timestamp payment_date;

    @Column(name = "store_id")
    private Long store_id;

    

    @Column(name = "staff_id")
    private Long staff_id;

    @Column(name = "payment_id")
    private Long payment_id;

    @Column(name = "rental_id")
    private Long rental_id;

    @Column(name = "rental_date")
    private Timestamp rental_date;

    @Column(name = "return_date")
    private Timestamp return_date;

    @Column(name = "staff_name")
    private String staff_name;

    @Column(name = "film_title")
    private String film_title;

    @Column(name = "category_name")
    private String category_name;

    public CustRentedFilmInfo() {
    }

    public CustRentedFilmInfo(Long film_id, Integer amount, Timestamp payment_date, Long store_id, Long customer_id,
            Long staff_id, Long payment_id, Long rental_id, Timestamp rental_date, Timestamp return_date,
            String staff_name, String film_title, String category_name) {
        this.film_id = film_id;
        this.amount = amount;
        this.payment_date = payment_date;
        this.store_id = store_id;
        this.customer_id = customer_id;
        this.staff_id = staff_id;
        this.payment_id = payment_id;
        this.rental_id = rental_id;
        this.rental_date = rental_date;
        this.return_date = return_date;
        this.staff_name = staff_name;
        this.film_title = film_title;
        this.category_name = category_name;
    }

    public Long getFilm_id() {
        return film_id;
    }

    public void setFilm_id(Long film_id) {
        this.film_id = film_id;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Timestamp getPayment_date() {
        return payment_date;
    }

    public void setPayment_date(Timestamp payment_date) {
        this.payment_date = payment_date;
    }

    public Long getStore_id() {
        return store_id;
    }

    public void setStore_id(Long store_id) {
        this.store_id = store_id;
    }

    public Long getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(Long customer_id) {
        this.customer_id = customer_id;
    }

    public Long getStaff_id() {
        return staff_id;
    }

    public void setStaff_id(Long staff_id) {
        this.staff_id = staff_id;
    }

    public Long getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(Long payment_id) {
        this.payment_id = payment_id;
    }

    public Long getRental_id() {
        return rental_id;
    }

    public void setRental_id(Long rental_id) {
        this.rental_id = rental_id;
    }

    public Timestamp getRental_date() {
        return rental_date;
    }

    public void setRental_date(Timestamp rental_date) {
        this.rental_date = rental_date;
    }

    public Timestamp getReturn_date() {
        return return_date;
    }

    public void setReturn_date(Timestamp return_date) {
        this.return_date = return_date;
    }

    public String getStaff_name() {
        return staff_name;
    }

    public void setStaff_name(String staff_name) {
        this.staff_name = staff_name;
    }

    public String getFilm_title() {
        return film_title;
    }

    public void setFilm_title(String film_title) {
        this.film_title = film_title;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

    
}