import { vehicule } from "./vehicule.js";

export class moto extends vehicule {
    
    display(){
        return "Moto : " + super.display()
    }

}