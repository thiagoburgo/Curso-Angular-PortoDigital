import * as moment from 'moment';

interface Point2D {
    x: number;
    y: number;
}

interface Point3D {
    x: number;
    y: number;
}

class Classe implements Point3D {
    x: number = 0;
    y: number = 0;

    constructor() {
    }    

    teste(): void {
        console.log(`Esse é o x: ${this.x} e o Y: ${this.y}`);
    }
}


let seuObj: Classe = {} as Classe;
//seuObj.x = 10;
//seuObj.teste();
console.log(seuObj);


function testeTipoInline() : {x: number, y: number} {
    return {x: 10, y: 20};
}

seuObj = <Classe>testeTipoInline();

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