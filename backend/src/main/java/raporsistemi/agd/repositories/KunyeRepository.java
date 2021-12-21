package raporsistemi.agd.repositories;



import org.springframework.data.jpa.repository.JpaRepository;

import raporsistemi.agd.entities.Kunye;

public interface KunyeRepository extends JpaRepository<Kunye, Long> {

	Kunye findBySehirName(String sehirName);
	Kunye findByIlKodu(short ilKodu);
}
