import { vehicule } from "./vehicule.js";

export class voiture extends vehicule {
    
    constructor(marque, modele , kilometrage, annee , clim){
        super(marque, modele, kilometrage, annee)
        this.clim = clim
    }

    display(){
        return "Voiture : " + super.display() + ", Clim : "+this.clim
    }

}