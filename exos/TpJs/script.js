let annuaire = [
    {
        nom: "Dupont",
        prenom: "Jean",
        age: 15
    },
    {
        nom: "Durant",
        prenom: "Pierre",
        age: 16
    },
    {
        nom: "Martin",
        prenom: "Jean",
        age: 17
    }
];

let choix = 1

while(choix != 4){
    choix = Affichage(choix) // affichage de manière synchrone
}

function Affichage(choix){
    let fonctions = 
    `\n 0 : Retour au menu 
    \n 1 : Afficher l'annuaire 
    \n 2 : Ajouter un contact
    \n 3 : Supprimer un contact
    \n 4 : Quitter `

    switch(true){
        case choix == 0 :  //affichage menu
            message = "Bienvenue dans l'annuaire"+ fonctions;
        break;
        case choix == 1 : // affichage annuaire
            message = "";
        break;
        case choix == 2 : // ajouter un contact
            message = "";
        break;
        case choix == 3 : // supprimer un contact
            message = "";
            break;
        case choix == 4 : // quitter
            message = "";
        break;
    }

    return choix
}