export default interface Rato{
    nome: string;
    idade: number;
    fugir(): void;
}

class Jerry implements Rato{
    nome: string;
    idade: number;

    constructor(n: string, i: number){
        this.nome = n;
        this.idade = i;
    }

    fugir(){
        console.log("corre, o tom está vindo!")
    }
}

let r = new Jerry("Jerry", 2)

console.log(r.nome)

console.log(r.idade)