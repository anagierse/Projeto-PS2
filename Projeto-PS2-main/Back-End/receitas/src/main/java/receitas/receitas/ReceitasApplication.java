package receitas.receitas;
//Ana Clara Gierse Raymundo 10428453
//Luana Domingo Branco 10428459
//Victor Luiz de Sá Alves 10426310
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = "receitas.receitas")
@EntityScan(basePackages = "receitas.entities") 

public class ReceitasApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReceitasApplication.class, args);
	}

}
