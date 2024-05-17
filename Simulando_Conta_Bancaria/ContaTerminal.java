import java.util.Scanner;
public class ContaTerminal{

    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);

        String nomeCliente = "";
        String agencia = "";
        int numeroConta = 0;
        double saldoConta = 0;

       System.out.println("Por favor, digite o seu nome de usuário: ");
        nomeCliente = ler.nextLine();

        System.out.println("Por favor, digite o número da sua agência: ");
        agencia = ler.nextLine();

        System.out.println("Por favor, digite o número da sua conta: ");
        numeroConta = ler.nextInt();

        System.out.println("Por favor, digite o saldo da sua conta: ");
        saldoConta = ler.nextDouble();

        System.out.printf("Olá %s, obrigado por criar uma conta em nosso banco, sua agência é %s, conta %d e seu " +
                "saldo %.2f já esta disponível para saque", nomeCliente, agencia, numeroConta, saldoConta);


    }
}