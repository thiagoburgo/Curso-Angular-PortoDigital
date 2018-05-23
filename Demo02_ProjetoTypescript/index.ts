export class MinhaClasse {
    meuMetodo(): number {
        let a: number = 1;

        if (true) {
            //O problema de hoisting é eliminado
            let a: number = 10;
            console.log(a);
        }

        console.log(a);

        return a;
    }
}

const ret = new MinhaClasse().meuMetodo();

console.log(ret);
