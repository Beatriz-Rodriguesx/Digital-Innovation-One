import candidatura.ProcessoSeletivo;

public class Main {
    public static void main(String[] args) {

        ProcessoSeletivo processo = new ProcessoSeletivo();

        processo.adicionarCandidato("Ana");
        processo.adicionarCandidato("Alice");
        processo.adicionarCandidato("André");
        processo.adicionarCandidato("Carlos");
        processo.adicionarCandidato("Renato");

        double[] salariosPretendidos = {1900.0, 2100.0, 2500.0, 1755.0, 2000.0};

        for (int i = 0; i < processo.getNomeCandidatos().size(); i++) {
            String candidato = processo.getNomeCandidatos().get(i);
            double salarioPretendido = salariosPretendidos[i];
            System.out.println("Analisando candidato: " + candidato);
            processo.analiseCandidato(salarioPretendido);
        }
    }
}
