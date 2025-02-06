package receitas.entities;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "receita")
public class Receita {
    @Id
    @JsonFormat(shape = JsonFormat.Shape.STRING)  
   private UUID id;    
   private String nome;
    private String descricao;
    private String urlImagem;
    private String ingredientes;
    private String modoPreparo;

    public Receita() {
    }
    
    public Receita(String nome, String descricao, String urlImagem, String ingredientes, String modoPreparo) {
        this.nome = nome;
        this.descricao = descricao;
        this.urlImagem = urlImagem;
        this.ingredientes = ingredientes;
        this.modoPreparo = modoPreparo;
    }

    public UUID getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public String getIngredientes() {
        return ingredientes;
    }

    public String getModoPreparo() {
        return modoPreparo;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }

    public void setIngredientes(String ingredientes) {
        this.ingredientes = ingredientes;
    }

    public void setModoPreparo(String modoPreparo) {
        this.modoPreparo = modoPreparo;
    }


}
