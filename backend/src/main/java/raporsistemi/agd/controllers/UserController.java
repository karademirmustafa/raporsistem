package raporsistemi.agd.controllers;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import raporsistemi.agd.entities.User;
import raporsistemi.agd.services.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
	private UserService userService;
	private PasswordEncoder passwordEncoder;

	
	
	
	public UserController(UserService userService, PasswordEncoder passwordEncoder) {
		this.userService = userService;
		this.passwordEncoder = passwordEncoder;
	}

	@PostMapping
	public User createUser(@RequestBody User user) {
		user.setAccountNonExpired(true);
		user.setCredentialsNonExpired(true);
		user.setEnabled(true);
		user.setAccountNonLocked(true);
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userService.createUser(user);
	}
	
	@GetMapping
	public List<User> getAllUser() {
		return userService.getAllUser();
	}
	
	@GetMapping("/{userId}")
	public User getOneUser(@PathVariable Long userId) {
		return userService.getOneUser(userId);
	}
	
	@PutMapping("/{userId}")
	public User updateUser(@PathVariable Long userId,@RequestBody User user) {
		user.setId(userId);
		return userService.updateUser(user);
	}
	
	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable Long userId) { 
	 userService.deleteUser(userId);
	}
	
}
