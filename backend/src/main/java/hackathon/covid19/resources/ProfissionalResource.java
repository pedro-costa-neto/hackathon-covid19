package hackathon.covid19.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hackathon.covid19.domains.Profissional;
import hackathon.covid19.dtos.ProfissionalDTO;
import hackathon.covid19.services.ProfissionalService;

@RestController
@RequestMapping (value = "/user/profissional")
public class ProfissionalResource {

    @Autowired
    private ProfissionalService service;

    @RequestMapping (method = RequestMethod.POST)
    public ResponseEntity<Profissional> insert(@RequestBody ProfissionalDTO objDto) {
        Profissional obj = service.insert(objDto);
        return ResponseEntity.ok().body(obj);
    }

    @RequestMapping (value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Profissional> findById(@PathVariable Integer id) {
        Profissional obj = service.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @RequestMapping (method = RequestMethod.GET)
    public ResponseEntity<List<Profissional>> findAll() {
        return ResponseEntity.ok().body(service.findAll());
    }

}