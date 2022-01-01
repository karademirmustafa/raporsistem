package raporsistemi.agd.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import raporsistemi.agd.entities.User;
public interface UserRepository extends JpaRepository<User, Long>{

	User findByUsername(String username);
	boolean existsByUsername(String username);
}
