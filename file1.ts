interface Men {
    nombre:string;
    poder:string;
}
export class Xmen {
    
    men: Men;
    constructor(men: Men){
       
        this.men = men;
    }

    working(){
        console.log(this.men.nombre+" has started to working");
    }

}

