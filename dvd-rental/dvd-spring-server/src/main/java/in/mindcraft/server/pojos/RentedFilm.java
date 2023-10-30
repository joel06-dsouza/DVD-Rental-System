package in.mindcraft.server.pojos;

import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "rented_film")
public class RentedFilm {
    
    @Column(name = "customer_id")
    private Long customerId;

    @Column(name = "payment_id")
    private Long paymentId;

    @Id
    @Column(name = "film_id")
    private Long filmId;

    @Column(name = "film_title")
    private String filmTitle;

    @Column(name = "staff_id")
    private Long staffId;

    @Column(name = "staff_name")
    private String staffName;

    @Column(name = "rental_id")
    private Long rentalId;

    @Column(name = "rental_date")
    private Date rentalDate;

    @Column(name = "return_date")
    private Date returnDate;

    @Column(name = "amount")
    private BigDecimal amount;

    @Column(name = "payment_date")
    private Date paymentDate;

    @Column(name = "store_id")
    private Long storeId;

    @Column(name = "category_name")
    private String categoryName;

    public RentedFilm() {
        super();
    }

    public RentedFilm(Long customerId, Long paymentId, Long filmId, String filmTitle, Long staffId, String staffName,
            Long rentalId, Date rentalDate, Date returnDate, BigDecimal amount, Date paymentDate, Long storeId,
            String categoryName) {
        super();
        this.customerId = customerId;
        this.paymentId = paymentId;
        this.filmId = filmId;
        this.filmTitle = filmTitle;
        this.staffId = staffId;
        this.staffName = staffName;
        this.rentalId = rentalId;
        this.rentalDate = rentalDate;
        this.returnDate = returnDate;
        this.amount = amount;
        this.paymentDate = paymentDate;
        this.storeId = storeId;
        this.categoryName = categoryName;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public Long getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Long paymentId) {
        this.paymentId = paymentId;
    }

    public Long getFilmId() {
        return filmId;
    }

    public void setFilmId(Long filmId) {
        this.filmId = filmId;
    }

    public String getFilmTitle() {
        return filmTitle;
    }

    public void setFilmTitle(String filmTitle) {
        this.filmTitle = filmTitle;
    }

    public Long getStaffId() {
        return staffId;
    }

    public void setStaffId(Long staffId) {
        this.staffId = staffId;
    }

    public String getStaffName() {
        return staffName;
    }

    public void setStaffName(String staffName) {
        this.staffName = staffName;
    }

    public Long getRentalId() {
        return rentalId;
    }

    public void setRentalId(Long rentalId) {
        this.rentalId = rentalId;
    }

    public Date getRentalDate() {
        return rentalDate;
    }

    public void setRentalDate(Date rentalDate) {
        this.rentalDate = rentalDate;
    }

    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public Long getStoreId() {
        return storeId;
    }

    public void setStoreId(Long storeId) {
        this.storeId = storeId;
    }

}



