export class vehicule {
    constructor(marque, modele, kilometrage, annee) {
        this.marque = marque,
        this.modele = modele,
        this.kilometrage = kilometrage,
        this.annee = annee
    }

    display() {
        return "Marque : "+ this.marque +", Modèle : "+this.modele+", Kilométrage : "+this.kilometrage+", Année : "+this.annee
    }
}