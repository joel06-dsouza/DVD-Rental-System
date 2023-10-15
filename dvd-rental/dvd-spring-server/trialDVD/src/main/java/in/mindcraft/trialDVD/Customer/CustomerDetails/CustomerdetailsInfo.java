package in.mindcraft.trialDVD.Customer.CustomerDetails;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer_detailsview1")
public class CustomerdetailsInfo {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     @Column(name="customer_id")
    private Integer id;

    @Column(name="name")
    private String name;

    @Column(name="email")
    private String email;

    @Column(name="customer_address")
    private String customer_address;

    @Column(name="customer_phone_no")
    private Long customer_phone_no;

    public CustomerdetailsInfo() {
    }

    public CustomerdetailsInfo(Integer id, String name, String email, String customer_address, Long customer_phone_no) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.customer_address = customer_address;
        this.customer_phone_no = customer_phone_no;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCustomer_address() {
        return customer_address;
    }

    public void setCustomer_address(String customer_address) {
        this.customer_address = customer_address;
    }

    public Long getCustomer_phone_no() {
        return customer_phone_no;
    }

    public void setCustomer_phone_no(Long customer_phone_no) {
        this.customer_phone_no = customer_phone_no;
    }
    
    
}
