function impots(nbAdultes, nbEnfants, montant){
    let parts = nbAdultes 
    if(nbEnfants>0 && nbEnfants<3){
        parts += nbEnfants * 0.5;
    }else if(nbEnfants > 2){
        parts += 1 + (nbEnfants-2)
    }

    let mtnImposable = montant / parts
    let aPayer = 0;

    switch(mtnImposable) {
        case mtnImposable < 10777 : 
            aPayer = 0
        case mtnImposable < 27478 : 
            aPayer += ((mtnImposable - 10777)/100 * 11) // max 1837
        case mtnImposable < 78570 : 
            aPayer += ((mtnImposable - 27478)/100 * 30) + 1837 // 15327 + 1837 = 17164
        case mtnImposable < 168994 : 
            aPayer += ((mtnImposable - 78570) / 100 * 41) + 17164 //17164 + 37073 = 54237
        case mtnImposable > 168994 :
            aPayer += ((mtnImposable - 168994 ) / 100 * 45) + 54237
    }
    
    impotSurRevenu =  aPayer * parts

    return impotSurRevenu;
}