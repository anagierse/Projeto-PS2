package receitas.repositories;
import java.util.UUID;


import org.springframework.data.repository.CrudRepository;

import receitas.entities.Receita;

public interface ReceitaRepository extends CrudRepository<Receita, UUID> {
}
