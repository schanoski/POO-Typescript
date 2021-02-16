"use strict";
var Carro = /** @class */ (function () {
    function Carro(c, a, v) {
        this.cor = c;
        this.ano = a;
        this.valor = v;
    }
    Carro.prototype.getValor = function () {
        return this.valor;
    };
    Carro.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    Carro.prototype.getInfo = function () {
        console.log(this.cor + ", " + this.ano + ", " + this.getValor());
    };
    Carro.prototype.getLog = function () {
        console.log("Segue o log desta informação");
        this.getInfo();
    };
    return Carro;
}());
var c = new Carro("black", 2020, 20000);
c.getLog();
