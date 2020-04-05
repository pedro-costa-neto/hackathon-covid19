package hackathon.covid19.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hackathon.covid19.domains.Profissional;
import hackathon.covid19.domains.Usuario;
import hackathon.covid19.domains.enums.UsuarioNivel;
import hackathon.covid19.dtos.ProfissionalDTO;
import hackathon.covid19.repositories.ProfissionalRepository;
import hackathon.covid19.repositories.UsuarioRepository;

@Service
public class ProfissionalService {

    @Autowired
    private ProfissionalRepository repository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Profissional insert(ProfissionalDTO objDto) {
        Usuario userObj = new Usuario(null, objDto.getNome(), objDto.getEmail(), objDto.getSenha(),
                UsuarioNivel.PROFISSIONAL);
        userObj = usuarioRepository.save(userObj);

        Profissional profissionalObj = new Profissional(null, userObj, objDto.getBio());

        return repository.save(profissionalObj);
    }

    public Profissional findById(Integer id) {
        Optional<Profissional> obj = repository.findById(id);
        return obj.orElse(null);
    }

    public List<Profissional> findAll() {
        return repository.findAll();
    }
}