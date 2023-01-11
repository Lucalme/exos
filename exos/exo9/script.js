function calcul(age, anciennete, salaire){
    let baseprime 
    if(anciennete >= 1 && anciennete <=10){
        baseprime = salaire * 0.5 * anciennete
    }else if(anciennete > 10){
        baseprime = salaire * anciennete
    }
}