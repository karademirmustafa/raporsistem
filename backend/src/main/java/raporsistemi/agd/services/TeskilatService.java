package raporsistemi.agd.services;

import java.util.List;

import org.springframework.stereotype.Service;

import raporsistemi.agd.entities.Teskilat;
import raporsistemi.agd.repositories.TeskilatRepository;

@Service
public class TeskilatService {

	private TeskilatRepository teskilatRepository;

	public TeskilatService(TeskilatRepository teskilatRepository) {
		this.teskilatRepository = teskilatRepository;
	}
	
	public Teskilat createTeskilat(Teskilat teskilat) { 
		return teskilatRepository.save(teskilat);
	}
	
	public List<Teskilat> getAllTeskilat(){ 
		return teskilatRepository.findAll();
	}
	public Teskilat getOneTeskilat(Long teskilatId) { 
		return teskilatRepository.findById(teskilatId).get();
	}
	
	public void deleteTeskilat(Long teskilatId) {
		teskilatRepository.findById(teskilatId).get();
		
	}
	
	public Teskilat updateTeskilat(Teskilat teskilat) { 
		return teskilatRepository.save(teskilat);
	}
}
