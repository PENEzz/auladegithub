class Pessoa{

}

class Motor{
    constructor(p){
        console.log("construtor do motor rodando...");
        this.potenciadomeumotor = p;
    }
}

class Carro{
    acelerar(){
        console.log("vruummm");
    }
}
let mBasicao = new Motor(2);
let c = new Carro();
c.acelerar()