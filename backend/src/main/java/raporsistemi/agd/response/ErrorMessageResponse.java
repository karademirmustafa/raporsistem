package raporsistemi.agd.response;

public class ErrorMessageResponse {
	
	private String error;
	
	public ErrorMessageResponse(String error) {
		super();
		this.error = error;
	}
	public ErrorMessageResponse() {}
	
	public String getError() {
		return error;
	}
	
	public void setError(String error) {
		this.error = error;
	}
}
