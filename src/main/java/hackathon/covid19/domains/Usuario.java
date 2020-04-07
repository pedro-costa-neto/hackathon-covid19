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

import com.fasterxml.jackson.annotation.JsonIgnore;

import hackathon.covid19.domains.enums.UsuarioNivel;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Usuario
 */

@Entity
@Data
@NoArgsConstructor
public class Usuario implements Serializable {
    
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String email;

    @JsonIgnore
    private String senha;
    private Integer nivel;
    
    @ManyToMany
	@JoinTable ( 
        name = "USUARIO_SERVICO",
        joinColumns = @JoinColumn (name = "usuario_id"),
        inverseJoinColumns = @JoinColumn (name = "servico_id")
    )
    private List<Servico> services;

    public Usuario(Integer id, String nome, String email, String senha, UsuarioNivel nivel) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.nivel = nivel.getCod();
    }
    
    public void setNivel(UsuarioNivel nivel) {
        this.nivel = nivel.getCod();
    }

    public UsuarioNivel getNivel() {
        return UsuarioNivel.toEnum(this.nivel);
    }
    
}