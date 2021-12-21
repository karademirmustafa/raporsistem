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
import raporsistemi.agd.entities.Kunye;

import raporsistemi.agd.services.KunyeService;

@RestController
@RequestMapping("/api/kunye")
public class KunyeController {

	private KunyeService kunyeService;

	public KunyeController(KunyeService kunyeService) {
		this.kunyeService = kunyeService;
	}
	
	@GetMapping
	public List<Kunye> kunyeGetAll(){
		return kunyeService.kunyeHepsiGetir();
	}
	
	@GetMapping(params = "sehirName")
	public Kunye kunyeSehirGetir(String sehirName){
		return kunyeService.kunyeSehirGetir(sehirName);
	} 
	@GetMapping(params = "ilKodu")
	public Kunye kunyeIlKoduGetir(short ilKodu) { 
		return kunyeService.kunyeIlKoduGetir(ilKodu);
	}
	
	@GetMapping("/{kunyeId}")
	public Kunye kunyeIdGetir(@PathVariable Long kunyeId) {
		return kunyeService.kunyeTekGetir(kunyeId);
	}
	
	@PutMapping("/{kunyeId}")
	public Kunye kunyeGuncelle(@PathVariable Long kunyeId, @RequestBody Kunye kunye) { 
		kunye.setId(kunyeId);
		return kunyeService.kunyeGuncelle(kunye);
	}
	
	
	
	@PostMapping
	public Kunye kunyeEkle(@RequestBody Kunye kunye) {
		return kunyeService.kunyeEkle(kunye);
	}
	
	@DeleteMapping("/{kunyeId}")
	public void kunyeSil( @PathVariable Long kunyeId) {
		kunyeService.kunyeSil(kunyeId);
	}
	
	

	
	
}
