export default class Calculadora{

    constructor(){
        this.suma()
        this.resta()
        this.division()
        this.multiplicacion()
    }
    resta=(a,b)=>{
        return a-b
    }
    division =(a,b)=>{

        if(b!=0){
            return a/b
        }
        return 0
    }
    suma=(a,b)=>{
        return a+b
    }
    multiplicacion =(a,b)=>{
        return a*b
    }


}

