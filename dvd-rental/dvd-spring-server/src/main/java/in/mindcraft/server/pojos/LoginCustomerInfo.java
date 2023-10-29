package in.mindcraft.server.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer_list")
public class LoginCustomerInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="name")
	private String name;
    
    @Column(name = "username")
    private String username;
 
    @Column(name = "password")
    private String password;

    @Column(name="address")
	private String address;

    @Column(name="zip code")
	private String zip;

    @Column(name="phone")
	private String phone;
    
    @Column(name="city")
	private String city;
     
    @Column(name="country")
	private String country;

    
    public LoginCustomerInfo() {
    }

    public LoginCustomerInfo(Long id, String name,String usename,String password ,String address, String zip, String phone, String city, String country) {
        this.id = id;
        this.name = name;
        this.username = usename;
        this.password = password;
        this.address = address;
        this.zip = zip;
        this.phone = phone;
        this.city = city;
        this.country = country;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
     
}
