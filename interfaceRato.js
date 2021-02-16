"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jerry = /** @class */ (function () {
    function Jerry(n, i) {
        this.nome = n;
        this.idade = i;
    }
    Jerry.prototype.fugir = function () {
        console.log("corre, o tom está vindo!");
    };
    return Jerry;
}());
var r = new Jerry("Jerry", 2);
console.log(r.nome);
console.log(r.idade);
