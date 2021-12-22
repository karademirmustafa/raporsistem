package raporsistemi.agd.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import raporsistemi.agd.response.ErrorMessageResponse;

@RestControllerAdvice
public class GlobalRestExceptionHandler {
	@ExceptionHandler(value = {SehirNameAlreadyExistsException.class,IlKoduAlreadyExistsException.class})
	@ResponseStatus(value = HttpStatus.CONFLICT)
	public ErrorMessageResponse abc(Exception exception) {
		return new ErrorMessageResponse(exception.getMessage());
	}

	@ExceptionHandler(value = IdNotExistsException.class)
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	public ErrorMessageResponse notFound(Exception exception) { 
		return new ErrorMessageResponse(exception.getMessage());
	}

}
