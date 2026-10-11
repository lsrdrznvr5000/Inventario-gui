class Inventario {
    constructor() {
        this.inv = [];
    }

    agregar(p) {
        if (this.buscarPorCodigo(p.codigo) !== null) {
            return false;
        }

        this.inv.push(p);
        let indice = this.inv.length - 1;
        while (indice > 0 && this.compararCodigos(this.inv[indice - 1].codigo, this.inv[indice].codigo) > 0) {
            const temporal = this.inv[indice - 1];
            this.inv[indice - 1] = this.inv[indice];
            this.inv[indice] = temporal;
            indice--;
        }
        return true;
    }

    listar(){
        if (this.inv.length === 0) {
            return "<p>El inventario esta vacio</p>";
        }

        let datos = "";
        for (let i = 0; i < this.inv.length; i++){
            datos += this.inv[i].infoHTML();
        }
        return datos;
    }

    eliminar(codigo) {
        const indice = this.buscarIndicePorCodigo(codigo);
        if (indice === -1) {
            return null;
        }

        const eliminado = this.inv[indice];
        for (let i = indice; i < this.inv.length - 1; i++) {
            this.inv[i] = this.inv[i + 1];
        }
        this.inv.pop();
        return eliminado;
    }

    extraerPrimero(){
        if (this.inv.length === 0) {
            return null;
        }

        const extraido = this.inv[0];
        for (let i = 0; i < this.inv.length - 1; i++){
            this.inv[i] = this.inv[i+1];
        }
        this.inv.pop();
        return extraido;
    }

    extraerUltimo(){
        if (this.inv.length === 0) {
            return null;
        }
        return this.inv.pop();
    }

    listarInverso() {
        if (this.inv.length === 0) {
            return "<p>El inventario esta vacio</p>";
        }

        let datos = "";
        for (let i = this.inv.length - 1; i >= 0; i--){
            datos += this.inv[i].infoHTML();
        }
        return datos;
    }

    buscarPorCodigo(codigo) {
        const indice = this.buscarIndicePorCodigo(codigo);
        return indice === -1 ? null : this.inv[indice];
    }

    compararCodigos(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }

    buscarIndicePorCodigo(codigo) {
        let inicio = 0;
        let fin = this.inv.length - 1;

        while (inicio <= fin) {
            const medio = Math.floor((inicio + fin) / 2);
            const comparacion = this.compararCodigos(this.inv[medio].codigo, codigo);
            if (comparacion === 0) {
                return medio;
            }
            if (comparacion < 0) {
                inicio = medio + 1;
            } else {
                fin = medio - 1;
            }
        }

        return -1;
    }

}