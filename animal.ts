export default class Animal{
    tipo: string;
    nome: string;
    idade: number;

    constructor(t: string, n: string, i:number){
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }

    protected Comunicar(): void{
        console.log("olá, sou método da classe mãe")
    }
}

class Cachorro extends Animal{
    raça: string;
    constructor(t: string, n: string, i:number, r: string){
        super(t,n,i)
        this.raça = r;
    }

    public latir(){
        super.Comunicar()
    }
}

class Gente extends Animal{
    cor: string;
    constructor(t: string, n: string, i:number, c: string){
        super(t,n,i)
        this.cor = c;
    }

    public Comunicar(){
        console.log("Olá galera")
    }
}

let c1 = new Cachorro("cachorro", "bob", 2 , "poodle")
c1.latir()

console.log(c1.nome)
console.log(c1.tipo)
console.log(c1.idade)
console.log(c1.raça)

let g1 = new Gente("Humano", "Marley", 25, "Negro")
g1.Comunicar()

console.log(g1.nome)
console.log(g1.tipo)
console.log(g1.idade)
console.log(g1.cor)