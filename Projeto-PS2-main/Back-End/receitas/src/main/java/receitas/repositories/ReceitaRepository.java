package receitas.repositories;
//Ana Clara Gierse Raymundo 10428453
//Luana Domingo Branco 10428459
//Victor Luiz de Sá Alves 10426310
import org.springframework.data.repository.CrudRepository;

import receitas.entities.Receita;

public interface ReceitaRepository  extends CrudRepository<Receita, Long>{

}
