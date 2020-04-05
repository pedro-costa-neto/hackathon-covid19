package hackathon.covid19.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hackathon.covid19.domains.Usuario;
import hackathon.covid19.services.UsuarioService;

@RestController
@RequestMapping (value = "/user")
public class UsuarioResource {

    @Autowired
    private UsuarioService service;

    @RequestMapping (method = RequestMethod.POST)
    public ResponseEntity<Usuario> insert(@RequestBody Usuario obj) {
        obj = service.insert(obj);
        return ResponseEntity.ok().body(obj);
    }

    @RequestMapping (value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Usuario> findById(@PathVariable Integer id) {
        Usuario obj = service.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @RequestMapping (value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Usuario> update(@RequestBody Usuario obj, @PathVariable Integer id) {
        obj.setId(id);
        obj = service.update(obj);
        return ResponseEntity.ok().body(obj);
    }

    @RequestMapping (value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Usuario> delete(@PathVariable Integer id) {
        service.delete(id);;
        return ResponseEntity.noContent().build();
    }

}