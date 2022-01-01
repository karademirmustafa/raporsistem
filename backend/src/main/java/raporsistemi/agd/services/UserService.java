package raporsistemi.agd.services;

import java.util.List;

import org.springframework.stereotype.Service;

import raporsistemi.agd.repositories.UserRepository;
import raporsistemi.agd.entities.User;
@Service
public class UserService {

	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	public List<User> getAllUser() {
		return userRepository.findAll();
	}
	
	public User createUser(User user) { 
		return userRepository.save(user);
	}
	
	public User getOneUser(Long userId) {
		return userRepository.findById(userId).get();
	}
		
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	
	public void deleteUser(Long userId) { 
		userRepository.deleteById(userId);
	}

}
