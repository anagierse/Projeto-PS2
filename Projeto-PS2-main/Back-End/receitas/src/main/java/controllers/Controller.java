package controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import entities.Receita;
import repositories.ReceitaRepository;

@RestController
@RequestMapping("/api")
public class Controller {
    @Autowired
    private ReceitaRepository repository;

    @GetMapping("/receitas")
    public Iterable<Receita> buscarTodos() {
        return repository.findAll();
    }
    
    @GetMapping("/receitas/{id}")
    public ResponseEntity<Receita> getById(@PathVariable Long id){
        Optional<Receita> receita = repository.findById(id);
        if (receita.isPresent()) {
            return ResponseEntity.ok(receita.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/receitas")
    public Receita salvarReceita(@RequestBody Receita novaReceita) {
        return repository.save(novaReceita);
    }
    
    @DeleteMapping("/receitas/{id}")
    public ResponseEntity<Void> deletarReceita(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build(); 
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    
}
