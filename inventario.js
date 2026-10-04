class Inventario {
    constructor() {
        this.inv = [];
    }

    agregar(p) {
        this.inv.push(p);
    }
        
    listar(){
        let datos="";
        //console.log(this.inv);
        for (let i = 0; i < this.inv.length; i++){
            datos += this.inv[i].infoHTML();
        }
        return datos;
    }

    agregarInicio(p){
        for (let i = this.inv.length; i >= 1; i--){
            this.inv[i] = this.inv[i-1];
        }
        this.inv[0] = p;
    }

    eliminar(p){
        const aux = p;
        this.inv[p] = 0;
        for (let i = aux; i < this.inv.length; i++){
            this.inv[i] = this.inv[i+1];
        }
        this.inv.pop();
    }

    buscar(p) {
        for (let i = 0; i < this.inv.length; i++) {
            if (this.inv[i] === p) {
                return this.inv[i];
            }
        }
        return null;
    }

    extraerPrimero(){
        let aux=this.inv[0];
        for (let i = 0; i < this.inv.length-1; i++){
            this.inv[i] = this.inv[i+1];
        }
        return aux;
    }

    listarInverso() {
        const datos=[];
        for (let i = this.inv.length - 1; i >= 0; i--){
            datos.push(this.inv[i].info());
        }
        return datos.join("\n");
    }

}