package hackathon.covid19.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hackathon.covid19.domains.Usuario;
import hackathon.covid19.repositories.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public Usuario findById(Integer id) {
        Optional<Usuario> obj = repository.findById(id);
        return obj.orElse(null);
    }

    public Usuario insert(Usuario obj) {
        obj.setId(null);
        return repository.save(obj);
    }

    public Usuario update(Usuario obj) {
        return repository.save(obj);
    }

    public void delete(Integer id) {
        Usuario obj = findById(id);
        
        if(obj != null) {
            repository.delete(obj);
        }
    }
}