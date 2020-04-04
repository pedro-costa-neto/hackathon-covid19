package hackathon.covid19.domains;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Profissional
 */

 @Entity
 @Data
 @NoArgsConstructor
public class Profissional implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
	@JoinColumn (name = "usuario_id")
    private Usuario usuario;

    @ManyToMany
	@JoinTable ( 
        name = "PROFISSIONAL_SERVICO",
        joinColumns = @JoinColumn (name = "profissional_id"),
        inverseJoinColumns = @JoinColumn (name = "servico_id")
    )
    private List<Servico> servicos;
    private String bio;

    public Profissional(Integer id, Usuario usuario, List<Servico> servicos, String bio) {
        this.id = id;
        this.usuario = usuario;
        this.servicos = servicos;
        this.bio = bio;
    }
    
}