package in.mindcraft.trialDVD.Admin;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admin")
public class LoginInfo {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
 @Column(name = "id")
    private Long id;
	
	
	 @Column(name="first_name")
	 private String first_name;

	 @Column(name="last_name")
	 private String last_name;
	 
	 @Column(name="username")
	 private String username;
	 
	 @Column(name="password")
	 private String password;

	public LoginInfo() {
		super();
	}

	public LoginInfo(Long id, String first_name, String last_name, String username, String password) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.username = username;
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
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
	 
	 
	 
}
