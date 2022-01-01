package raporsistemi.agd.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import raporsistemi.agd.entities.User;
import raporsistemi.agd.repositories.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	private UserRepository userRepository;
	
	public UserDetailsServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
	
		if(userRepository.existsByUsername(username)) { 
			return userRepository.findByUsername(username);
		}else { 
			throw new UsernameNotFoundException(username+ " bulunamadı"); 
		}
		
	
	
	}
	
	
	
}
