"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(t, n, i) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }
    Animal.prototype.Comunicar = function () {
        console.log("olá, sou método da classe mãe");
    };
    return Animal;
}());
exports.default = Animal;
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(t, n, i, r) {
        var _this = _super.call(this, t, n, i) || this;
        _this.raça = r;
        return _this;
    }
    Cachorro.prototype.latir = function () {
        _super.prototype.Comunicar.call(this);
    };
    return Cachorro;
}(Animal));
var Gente = /** @class */ (function (_super) {
    __extends(Gente, _super);
    function Gente(t, n, i, c) {
        var _this = _super.call(this, t, n, i) || this;
        _this.cor = c;
        return _this;
    }
    Gente.prototype.Comunicar = function () {
        console.log("Olá galera");
    };
    return Gente;
}(Animal));
var c1 = new Cachorro("cachorro", "bob", 2, "poodle");
c1.latir();
console.log(c1.nome);
console.log(c1.tipo);
console.log(c1.idade);
console.log(c1.raça);
var g1 = new Gente("Humano", "Marley", 25, "Negro");
g1.Comunicar();
console.log(g1.nome);
console.log(g1.tipo);
console.log(g1.idade);
console.log(g1.cor);
