package raporsistemi.agd.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Kunye {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(length = 30,nullable = false,unique = true)
	private String sehirName;
	
	@Column(nullable=false,unique = true)
	private short ilKodu;
	
	@Column(nullable = false)
	private int temsilciSayisi;
	
	@Column(nullable = false)
	private int fakulteSayisi;
	
	@Column(nullable = false)
	private int yuksekokulSayisi;
	
	@Column(nullable = false)
	private int meslekYuksekOkulSayisi;
	
	@Column(nullable = false)
	private int bolumSayisi;
	
	@Column(nullable = false)
	private int erkekOgrSayisi;
	
	@Column(nullable = false)
	private int toplamOgrSayisi;
	

	// Pageable, exception handling, security
	
	
	public short getIlKodu() {
		return ilKodu;
	}
	public void setIlKodu(short ilKodu) {
		this.ilKodu = ilKodu;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public String getSehirName() {
		return sehirName;
	}
	public void setSehirName(String sehirName) {
		this.sehirName = sehirName;
	}
	public int getTemsilciSayisi() {
		return temsilciSayisi;
	}
	public void setTemsilciSayisi(int temsilciSayisi) {
		this.temsilciSayisi = temsilciSayisi;
	}
	public int getFakulteSayisi() {
		return fakulteSayisi;
	}
	public void setFakulteSayisi(int fakulteSayisi) {
		this.fakulteSayisi = fakulteSayisi;
	}
	public int getYuksekokulSayisi() {
		return yuksekokulSayisi;
	}
	public void setYuksekokulSayisi(int yuksekokulSayisi) {
		this.yuksekokulSayisi = yuksekokulSayisi;
	}
	public int getMeslekYuksekOkulSayisi() {
		return meslekYuksekOkulSayisi;
	}
	public void setMeslekYuksekOkulSayisi(int meslekYuksekOkulSayisi) {
		this.meslekYuksekOkulSayisi = meslekYuksekOkulSayisi;
	}
	public int getBolumSayisi() {
		return bolumSayisi;
	}
	public void setBolumSayisi(int bolumSayisi) {
		this.bolumSayisi = bolumSayisi;
	}
	public int getErkekOgrSayisi() {
		return erkekOgrSayisi;
	}
	public void setErkekOgrSayisi(int erkekOgrSayisi) {
		this.erkekOgrSayisi = erkekOgrSayisi;
	}
	public int getToplamOgrSayisi() {
		return toplamOgrSayisi;
	}
	public void setToplamOgrSayisi(int toplamOgrSayisi) {
		this.toplamOgrSayisi = toplamOgrSayisi;
	}
	
	
	
	
}
