package hackathon.covid19.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import hackathon.covid19.domains.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {

}