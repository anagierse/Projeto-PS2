package receitas;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableWebMvc
@Configuration
public class WebConfigure implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {

		registry.addMapping("/api/**")
		.allowedOrigins("http://localhost:4200", "https://didactic-goggles-pjrqwpjgrqg9f9p9x-4200.app.github.dev")
		.allowedMethods("GET", "POST","OPTIONS")
		.allowedHeaders("*");

		// Add more mappings...
	}
}
