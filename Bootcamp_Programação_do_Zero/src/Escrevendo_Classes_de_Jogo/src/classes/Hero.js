class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataque = this.tipo.toLowerCase() === 'mago' ? 'magia' :
            this.tipo.toLowerCase() === 'guerreiro' ? 'espada' :
                this.tipo.toLowerCase() === 'monge' ? 'artes marciais' :
                    this.tipo.toLowerCase() === 'ninja' ? 'shuriken' :
                        'atacou de forma desconhecida';

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
export default Hero;
