"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var Classe = /** @class */ (function () {
    function Classe() {
        this.x = 0;
        this.y = 0;
    }
    Classe.prototype.teste = function () {
        console.log("Esse \u00E9 o x: " + this.x + " e o Y: " + this.y);
    };
    return Classe;
}());
var seuObj = {};
//seuObj.x = 10;
//seuObj.teste();
console.log(seuObj);
function testeTipoInline() {
    return { x: 10, y: 20 };
}
seuObj = testeTipoInline();
// interface Visible{
//     show(): void;
//     hide(): void;
// }
// interface jQuery {
//     (selector: string): Visible;
// }
// declare var $: jQuery;
//$(".teste").show();
console.log(moment("10/02/2018").add(1, "y").format("DD-MM-YYYY"));
