package receitas.receitas;
//Ana Clara Gierse Raymundo 10428453
//Luana Domingo Branco 10428459
//Victor Luiz de Sá Alves 10426310

@EnableWebMvc
@Configuration
public class WebConfigure implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {

		registry.addMapping("/api/**")
			.allowedOrigins("http://localhost:4200/")
			.allowedMethods("GET", "POST", "DELETE");

		// Add more mappings...
	}
}