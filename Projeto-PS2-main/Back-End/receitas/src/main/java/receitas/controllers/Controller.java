package receitas.controllers;

import java.util.Optional;
import java.util.UUID;

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

import receitas.entities.Receita;
import receitas.repositories.ReceitaRepository;

@RestController
@RequestMapping("/api/receitas")
public class Controller {
    @Autowired
    private ReceitaRepository repository;

    @GetMapping()
    public Iterable<Receita> buscarTodos() {
        return repository.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Receita> getById(@PathVariable UUID id){
        Optional<Receita> receita = repository.findById(id);
        if (receita.isPresent()) {
            return ResponseEntity.ok(receita.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping()
    public ResponseEntity<Receita> salvarReceita(@RequestBody Receita novaReceita) {
        try {
            novaReceita.setId(UUID.randomUUID());
            Receita savedReceita = repository.save(novaReceita);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedReceita);
        } catch (Exception e) {
            e.printStackTrace();  
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarReceita(@PathVariable UUID id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build(); 
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    
}
