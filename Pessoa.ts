export default class Pessoa{
    constructor(n: string, i: number){
        this.nome = n;
        this.idade = i;
    }

    nome: string;
    idade: number;
}

let p1 = new Pessoa("William", 23)

console.log(` Nome: ${p1.nome}, Idade: ${p1.idade}`)