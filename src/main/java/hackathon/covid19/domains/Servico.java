package hackathon.covid19.domains;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Servico
 */
@Entity
@Data
@NoArgsConstructor
public class Servico implements Serializable{
    
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
	@JoinColumn (name = "profissional_id")
    private Profissional profissional;

    private String titulo;
    private String descricao;

    public Servico(Integer id, Profissional profissional, String titulo, String descricao, float avaliacao) {
        this.id = id;
        this.profissional = profissional;
        this.titulo = titulo;
        this.descricao = descricao;
    }
    
}