package raporsistemi.agd;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import raporsistemi.agd.entities.User;
import raporsistemi.agd.services.UserService;

@SpringBootApplication
public class AgdApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgdApplication.class, args);
	}
	
	/*@Bean
	public CommandLineRunner mistik(UserService userService,PasswordEncoder passwordEncoder) {
		
		return args -> {
			User user= new User();
			
			user.setUsername("tunc");
			user.setAdmin(false);
			
			
			userService.createUser(user);
		};
	}*/

}

