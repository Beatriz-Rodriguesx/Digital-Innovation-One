package candidatura;

import java.util.ArrayList;
import java.util.List;

public class ProcessoSeletivo {
    private List<String> nomeCandidatos;
    private double salarioBase;

    public ProcessoSeletivo() {
        this.nomeCandidatos = new ArrayList<>();
        this.salarioBase = 2000.0;
    }

    public void adicionarCandidato(String nomeCandidato) {
        this.nomeCandidatos.add(nomeCandidato);
    }

    public void analiseCandidato(double salarioPretendido) {
        System.out.println((salarioBase > salarioPretendido) ? "Ligar para o candidato" : salarioBase == salarioPretendido ? "Ligar para o candidato com contra proposta" : "Aguardando resultado dos demais candidatos");
    }

    public List<String> getNomeCandidatos() {
        return nomeCandidatos;
    }

    public void setNomeCandidatos(List<String> nomeCandidatos) {
        this.nomeCandidatos = nomeCandidatos;
    }
}
