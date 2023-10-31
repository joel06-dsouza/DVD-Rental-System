package in.mindcraft.server.pojos;
import jakarta.persistence.*;
import java.sql.Timestamp;





@Entity
@Table(name = "payment_details")
public class PaymentInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id")
    private int paymentId;

    @Column(name = "customer_id")
    private int customerId;

    @Column(name = "film_id")
    private int filmId;

    @Column(name = "film_title")
    private String filmTitle;

    @Column(name = "staff_id")
    private int staffId;

    @Column(name = "staff_name")
    private String staffName;

    @Column(name = "rental_id")
    private int rentalId;

    @Column(name = "rental_date")
    private Timestamp rentalDate;

    @Column(name = "return_date")
    private Timestamp returnDate;

    @Column(name = "amount")
    private double amount;

    @Column(name = "payment_date")
    private Timestamp paymentDate;

    @Column(name = "store_id")
    private int storeId;

    @Column(name = "store_address")
    private String storeAddress;

    public PaymentInfo() {
    }

    public PaymentInfo(int paymentId, int customerId, int filmId, String filmTitle, int staffId, String staffName,
            int rentalId, Timestamp rentalDate, Timestamp returnDate, double amount, Timestamp paymentDate, int storeId,
            String storeAddress) {
        this.paymentId = paymentId;
        this.customerId = customerId;
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
        this.storeAddress = storeAddress;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public int getFilmId() {
        return filmId;
    }

    public void setFilmId(int filmId) {
        this.filmId = filmId;
    }

    public String getFilmTitle() {
        return filmTitle;
    }

    public void setFilmTitle(String filmTitle) {
        this.filmTitle = filmTitle;
    }

    public int getStaffId() {
        return staffId;
    }

    public void setStaffId(int staffId) {
        this.staffId = staffId;
    }

    public String getStaffName() {
        return staffName;
    }

    public void setStaffName(String staffName) {
        this.staffName = staffName;
    }

    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }

    public Timestamp getRentalDate() {
        return rentalDate;
    }

    public void setRentalDate(Timestamp rentalDate) {
        this.rentalDate = rentalDate;
    }

    public Timestamp getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Timestamp returnDate) {
        this.returnDate = returnDate;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Timestamp getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Timestamp paymentDate) {
        this.paymentDate = paymentDate;
    }

    public int getStoreId() {
        return storeId;
    }

    public void setStoreId(int storeId) {
        this.storeId = storeId;
    }

    public String getStoreAddress() {
        return storeAddress;
    }

    public void setStoreAddress(String storeAddress) {
        this.storeAddress = storeAddress;
    }


    
    

}
