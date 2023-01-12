let etudiants = [
    {
        prenom: "José",
        nom: "Garcia",
        matieres: {
            francais: 16,
            anglais: 7,
            humour: 14
        }
    },
    {
        prenom: "Antoine",
        nom: "De caunes",
        matieres: {
            francais: 15,
            anglais: 6,
            humour: 16,
            informatique: 4,
            sport: 10
        }
    }
]

for (eleve of etudiants) {
    console.log(eleve.prenom + " " + eleve.nom)
    console.table(eleve.matieres)
    let j = 0
    let total = 0
    for (matiere in eleve.matieres) {
        j++
        total += eleve.matieres[matiere]
    }
    console.log("moyenne générale : " + total / j + "\n")
}
