package hackathon.covid19.domains;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
    private String descricao;

    public Servico(Integer id, String descricao) {
        this.id = id;
        this.descricao = descricao;
    }
    
}