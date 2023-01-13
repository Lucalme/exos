let fonctions = 
`\n0 : Retour au menu 
1 : Afficher l'annuaire 
2 : Ajouter un contact
3 : Supprimer un contact
4 : Quitter `



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

let choix = 0

while(choix != 4){
    choix = Affichage(choix) // affichage de manière synchrone
}

function Affichage(choix){
    let contactMsg = ""
    let i = 1

    for (contact of annuaire){
        contactMsg = contactMsg + i +'. ' + contact.prenom + " " + contact.nom +'\n' + "age : " +contact.age + "\n"
        i++
    }

    switch(true){
        case choix == 0 :  //affichage menu
            message = "Bienvenue dans l'annuaire ! \n"+ fonctions;
            break;
        case choix == 1 : // affichage annuaire
            message = "Voici vos contacts : \n" + contactMsg + fonctions;
            break;
        case choix == 2 : // ajouter un contact
            message = "Ajout d'un contact : "  ;
            break;
        case choix == 3 : // supprimer un contact
            message = 
            `Suppression d'un contact : \n
Veuillez indiquer le numéro du contact que vous souhaitez supprimer : \n` + contactMsg ;
            break;
        case choix == 4 : // quitter
            // message = "Au revoir ! ";
            // alert(message);
            return 4;
    }

    if (choix == 2){ // Ajout d'un contact
        nouveauContact  = prompt(`Indiquez le prénom, le nom et l'age du contact en les séparant par des espaces : 
        exemple : Jean Dupont 38`)
        let tab = nouveauContact.split(" ")
        Contact = {
            prenom : tab[0],
            nom : tab[1],
            age : tab[2]
        }
        annuaire.push(contact)
        Alert("Contact Ajouté ! ")
        return 0
    }
    if (choix == 3){ // Suppression d'un contact
        choix  = Number(prompt(message))
        annuaire.splice(choix) 
        Alert("Contact Supprimé ! ")
        return 0
    }
    choix  = Number(prompt(message))

    return choix
}