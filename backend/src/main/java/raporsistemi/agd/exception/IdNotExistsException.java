package raporsistemi.agd.exception;

import raporsistemi.agd.entities.Kunye;

public class IdNotExistsException extends RuntimeException{

	public IdNotExistsException(long id) {
		super(id+"  dondurmam gaymak"+"Böyle bir Id yok");
	}
}
