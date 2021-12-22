package raporsistemi.agd.exception;

public class SehirNameAlreadyExistsException extends RuntimeException{	
	public SehirNameAlreadyExistsException() {
		super("Bu şehir ismi zaten kayıtlıdır! Geri BASS");
	}
	
}
