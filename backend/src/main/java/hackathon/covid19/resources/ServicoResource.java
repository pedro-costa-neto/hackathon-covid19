package hackathon.covid19.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hackathon.covid19.domains.Servico;
import hackathon.covid19.services.ServicoService;

@RestController
@RequestMapping (value = "/servico")
public class ServicoResource {

    @Autowired
    private ServicoService service;

    @RequestMapping (method = RequestMethod.POST)
    public ResponseEntity<Servico> insert(@RequestBody Servico obj) {
        obj = service.insert(obj);
        return ResponseEntity.ok().body(obj);
    }

    @RequestMapping (method = RequestMethod.GET)
    public ResponseEntity<List<Servico>> findAll() {
        return ResponseEntity.ok().body(service.findAll());
    }

    @RequestMapping (value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Servico> findById(@PathVariable Integer id) {
        Servico obj = service.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @RequestMapping (value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Servico> update(@RequestBody Servico obj, @PathVariable Integer id) {
        obj.setId(id);
        obj = service.update(obj);
        return ResponseEntity.ok().body(obj);
    }

    @RequestMapping (value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Servico> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}