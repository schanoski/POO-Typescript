class Carro{
    private cor: string;
    private ano: number;
    private valor: number;

    constructor(c : string, a: number, v: number){
        this.cor = c;
        this.ano = a;
        this.valor = v;
    }

    public getValor(){
        return this.valor;
    }

    public setValor(valor: number){
        this.valor = valor
    }

    private getInfo(){
        console.log(`${this.cor}, ${this.ano}, ${this.getValor()}`)
    }

    public getLog(){
        console.log("Segue o log desta informação")
        this.getInfo();
    }

}

let c = new Carro("black", 2020, 20000)
c.getLog()