package hackathon.covid19.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import hackathon.covid19.domains.Profissional;

public interface ProfissionalRepository extends JpaRepository<Profissional, Integer> {

}