package raporsistemi.agd.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import raporsistemi.agd.entities.Teskilat;
import raporsistemi.agd.services.TeskilatService;

@RestController
@RequestMapping("/api/teskilat")
public class TeskilatController {

	private TeskilatService teskilatService;

	public TeskilatController(TeskilatService teskilatService) {
		this.teskilatService = teskilatService;
	}
	
	@PostMapping
	public Teskilat createTeskilat(@RequestBody Teskilat teskilat) { 
		return teskilatService.createTeskilat(teskilat);
	}
	
	@GetMapping
	public List<Teskilat> getAllTeskilat(){ 
		return teskilatService.getAllTeskilat();
	}
	
	@GetMapping("/{teskilatId}")
	public Teskilat getOneTeskilat(@PathVariable Long teskilatId) { 
		return teskilatService.getOneTeskilat(teskilatId);
	}
	@PutMapping("/{teskilatId}")
	public Teskilat updateTeskilat(@PathVariable Long teskilatId,@RequestBody Teskilat teskilat) { 
		 teskilat.setId(teskilatId);
		return teskilatService.updateTeskilat(teskilat);
	}
	
	
	@DeleteMapping("/{teskilatId}")
	public void deleteTeskilat(@PathVariable Long teskilatId)  { 
		teskilatService.deleteTeskilat(teskilatId);
	}
	
	
	
	
	
}
