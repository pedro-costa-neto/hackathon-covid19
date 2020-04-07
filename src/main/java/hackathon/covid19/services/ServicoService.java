package hackathon.covid19.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hackathon.covid19.domains.Servico;
import hackathon.covid19.repositories.ServicoRepository;

@Service
public class ServicoService {
    
    @Autowired
    private ServicoRepository repository;

    public Servico findById(Integer id) {
        Optional<Servico> obj = repository.findById(id);
        return obj.orElse(null);
    }

    public List<Servico> findAll() {
        List<Servico> obj = repository.findAll();
        return obj;
    }

    public Servico insert(Servico obj) {
        obj.setId(null);
        return repository.save(obj);
    }

    public Servico update(Servico obj) {
        return repository.save(obj);
    }

    public void delete(Integer id) {
        Servico obj = findById(id);
        
        if(obj != null) {
            repository.delete(obj);
        }
    }
}