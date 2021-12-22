package raporsistemi.agd.services;

import java.util.List;

import org.springframework.stereotype.Service;

import raporsistemi.agd.entities.Kunye;
import raporsistemi.agd.exception.IdNotExistsException;
import raporsistemi.agd.exception.IlKoduAlreadyExistsException;
import raporsistemi.agd.exception.SehirNameAlreadyExistsException;
import raporsistemi.agd.repositories.KunyeRepository;

@Service
public class KunyeService {

	private KunyeRepository kunyeRepository;

	public KunyeService(KunyeRepository kunyeRepository) {
		this.kunyeRepository = kunyeRepository;
	}
	
	public List<Kunye> kunyeHepsiGetir(){
		return kunyeRepository.findAll();
	} 
	
	public Kunye kunyeSehirGetir(String sehirName){
		return kunyeRepository.findBySehirName(sehirName);
	} 
	
	public Kunye kunyeIlKoduGetir(short ilKodu) { 
		return kunyeRepository.findByIlKodu(ilKodu);
	}
	
	public Kunye kunyeEkle(Kunye kunye) {
		
		
		if(kunyeRepository.existsBySehirName(kunye.getSehirName()))
		{
			throw new SehirNameAlreadyExistsException();
		}else if (kunyeRepository.existsByIlKodu(kunye.getIlKodu())) {
			throw new IlKoduAlreadyExistsException();
		}
		
		return kunyeRepository.save(kunye);
	}

	public void kunyeSil(Long kunyeId) {
		kunyeRepository.deleteById(kunyeId);
	}
	
	public Kunye kunyeTekGetir(Long kunyeId) {
		if(!kunyeRepository.existsById(kunyeId)) { 
			throw new IdNotExistsException(kunyeId);
		}
		return kunyeRepository.findById(kunyeId).get();
	}
	
	public Kunye kunyeGuncelle(Kunye kunye) { 
		return kunyeRepository.save(kunye);
	}
	
	
}
