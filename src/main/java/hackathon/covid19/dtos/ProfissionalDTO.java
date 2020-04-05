package hackathon.covid19.dtos;

import java.io.Serializable;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProfissionalDTO implements Serializable{
    
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String nome;
    private String email;
    private String senha;
    private Integer nivel;
    private String bio;

    public ProfissionalDTO(Integer id, String nome, String email, String senha, Integer nivel, String bio) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.nivel = nivel;
        this.bio = bio;
    }
    
}