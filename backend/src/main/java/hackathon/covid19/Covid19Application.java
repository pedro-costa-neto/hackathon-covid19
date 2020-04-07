package hackathon.covid19;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import hackathon.covid19.domains.Profissional;
import hackathon.covid19.domains.Servico;
import hackathon.covid19.domains.Usuario;
import hackathon.covid19.domains.enums.UsuarioNivel;
import hackathon.covid19.repositories.ProfissionalRepository;
import hackathon.covid19.repositories.ServicoRepository;
import hackathon.covid19.repositories.UsuarioRepository;

@SpringBootApplication
public class Covid19Application implements CommandLineRunner {

	@Autowired
	private ProfissionalRepository profissionalRepository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private ServicoRepository servicoRepository;

	public static void main(String[] args) {
		SpringApplication.run(Covid19Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		Usuario user1 = new Usuario(null, "admin", "admin@admin.com", "admin", UsuarioNivel.ADMIN);
		Usuario user2 = new Usuario(null, "user", "user@user.com", "user", UsuarioNivel.CLIENTE); 
		Usuario user3 = new Usuario(null, "Profissional", "user@Profissional.com", "user", UsuarioNivel.PROFISSIONAL); 
		Usuario user4 = new Usuario(null, "Profissional 123", "luiz@empresa.com", "1234567", UsuarioNivel.PROFISSIONAL); 

		usuarioRepository.saveAll(Arrays.asList(user1, user2, user3, user4));

		Profissional p1 = new Profissional(null, user3, "teste");
		Profissional p2 = new Profissional(null, user4, "teste 1234");

		profissionalRepository.saveAll(Arrays.asList(p1, p2));

		Servico s1 = new Servico(null, p1, "Titulo do serviço", "Descrição do serviço", (float) 4.5);
		Servico s2 = new Servico(null, p1, "Titulo do serviço 1", "Descrição do serviço 1", (float) 3.5);
		Servico s3 = new Servico(null, p1, "Titulo do serviço 2", "Descrição do serviço 2", (float) 2.5);
		Servico s4 = new Servico(null, p2, "Titulo do serviço 4", "Descrição do serviço 4", (float) 5.0);

		servicoRepository.saveAll(Arrays.asList(s1, s2, s3, s4));


		user2.setServices(Arrays.asList(s1, s2, s4));
		usuarioRepository.saveAll(Arrays.asList(user2));

	}
}
