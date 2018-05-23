"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MinhaClasse = /** @class */ (function () {
    function MinhaClasse() {
    }
    MinhaClasse.prototype.meuMetodo = function () {
        var a = 1;
        if (true) {
            var a_1 = 10;
            console.log(a_1);
        }
        console.log(a);
        return a;
    };
    return MinhaClasse;
}());
exports.MinhaClasse = MinhaClasse;
var ret = new MinhaClasse().meuMetodo();
console.log(ret);
