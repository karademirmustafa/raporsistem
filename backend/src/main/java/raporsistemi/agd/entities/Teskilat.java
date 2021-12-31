package raporsistemi.agd.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

@Entity
public class Teskilat {
	
	
	
	@Id
	@SequenceGenerator(initialValue = 1,allocationSize = 1, name = "sequence")
	@GeneratedValue(strategy =GenerationType.SEQUENCE,generator = "sequence")
	private Long id;
	
	@OneToOne(fetch =FetchType.EAGER)
	private Kunye kunye;
	
	@Column(nullable = false)
	private int subeUniBaskani;
	
	@Column(nullable = false)
	private int subeUniKomisyon;
	
	@Column(nullable = false)
	private int temsilciUniBaskani;
	
	@Column(nullable = false)
	private int temsilciUniKomisyon;
	
	@Column(nullable = false)
	private int fakulteBaskani;
	
	@Column(nullable = false)
	private int fakulteKomisyon;
	
	@Column(nullable = false)
	private int yuksekOkulBaskani;
	
	@Column(nullable = false)
	private int yuksekOkulKomisyon;
	
	@Column(nullable = false)
	private int myoBaskani;
	
	@Column(nullable = false)
	private int myoKomisyon;
	
	@Column(nullable = false)
	private int bolumBaskani;
	
	@Column(nullable = false)
	private int bolumKomisyon;
	
	@Column(nullable = false)
	private int sinifBaskani;
	
	@Column(nullable = false)
	private int sinifKomisyon;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Kunye getKunye() {
		return kunye;
	}

	public void setKunye(Kunye kunye) {
		this.kunye = kunye;
	}

	public int getSubeUniBaskani() {
		return subeUniBaskani;
	}

	public void setSubeUniBaskani(int subeUniBaskani) {
		this.subeUniBaskani = subeUniBaskani;
	}

	public int getSubeUniKomisyon() {
		return subeUniKomisyon;
	}

	public void setSubeUniKomisyon(int subeUniKomisyon) {
		this.subeUniKomisyon = subeUniKomisyon;
	}

	public int getTemsilciUniBaskani() {
		return temsilciUniBaskani;
	}

	public void setTemsilciUniBaskani(int temsilciUniBaskani) {
		this.temsilciUniBaskani = temsilciUniBaskani;
	}

	public int getTemsilciUniKomisyon() {
		return temsilciUniKomisyon;
	}

	public void setTemsilciUniKomisyon(int temsilciUniKomisyon) {
		this.temsilciUniKomisyon = temsilciUniKomisyon;
	}

	public int getFakulteBaskani() {
		return fakulteBaskani;
	}

	public void setFakulteBaskani(int fakulteBaskani) {
		this.fakulteBaskani = fakulteBaskani;
	}

	public int getFakulteKomisyon() {
		return fakulteKomisyon;
	}

	public void setFakulteKomisyon(int fakulteKomisyon) {
		this.fakulteKomisyon = fakulteKomisyon;
	}

	public int getYuksekOkulBaskani() {
		return yuksekOkulBaskani;
	}

	public void setYuksekOkulBaskani(int yuksekOkulBaskani) {
		this.yuksekOkulBaskani = yuksekOkulBaskani;
	}

	public int getYuksekOkulKomisyon() {
		return yuksekOkulKomisyon;
	}

	public void setYuksekOkulKomisyon(int yuksekOkulKomisyon) {
		this.yuksekOkulKomisyon = yuksekOkulKomisyon;
	}

	public int getMyoBaskani() {
		return myoBaskani;
	}

	public void setMyoBaskani(int myoBaskani) {
		this.myoBaskani = myoBaskani;
	}

	public int getMyoKomisyon() {
		return myoKomisyon;
	}

	public void setMyoKomisyon(int myoKomisyon) {
		this.myoKomisyon = myoKomisyon;
	}

	public int getBolumBaskani() {
		return bolumBaskani;
	}

	public void setBolumBaskani(int bolumBaskani) {
		this.bolumBaskani = bolumBaskani;
	}

	public int getBolumKomisyon() {
		return bolumKomisyon;
	}

	public void setBolumKomisyon(int bolumKomisyon) {
		this.bolumKomisyon = bolumKomisyon;
	}

	public int getSinifBaskani() {
		return sinifBaskani;
	}

	public void setSinifBaskani(int sinifBaskani) {
		this.sinifBaskani = sinifBaskani;
	}

	public int getSinifKomisyon() {
		return sinifKomisyon;
	}

	public void setSinifKomisyon(int sinifKomisyon) {
		this.sinifKomisyon = sinifKomisyon;
	}
	

	
}
