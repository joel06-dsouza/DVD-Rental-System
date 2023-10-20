package in.mindcraft.server.pojos;

import javax.xml.bind.annotation.XmlRootElement;

import jakarta.persistence.*;
import lombok.*;

@Entity
@XmlRootElement
public class UserInfo {

	@Id
	private int id;

    @Column(name = "username")
	private String username;

    @Column(name = "password")
	private String password;

    @Column(name = "role")
	private String role;

	@Column(name = "staff_id")
	private int staff_id;

    public UserInfo(String username,String password){
        this.username = username;
        this.password = password;
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return username;
	}

	public void setName(String name) {
		this.username = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRoles(String roles) {
		this.role = roles;
	}

	public int getStaff_id() {
		return staff_id;
	}

	public void setStaff_id(int staff_id) {
		this.staff_id = staff_id;
	}

	

}
