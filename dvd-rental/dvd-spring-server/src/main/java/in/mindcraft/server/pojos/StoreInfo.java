package in.mindcraft.server.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "storeview")
public class StoreInfo {
  
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
 @Column(name = "store_id")
    private Long id;

    @Column(name="address")
    private String address;

    public StoreInfo() {
    }

    public StoreInfo(Long id, String address) {
        this.id = id;
        this.address = address;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    
    
}
