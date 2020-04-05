package hackathon.covid19.domains;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
    private String senha;
    private Integer nivel;

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