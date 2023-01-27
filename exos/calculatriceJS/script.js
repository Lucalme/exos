let touches = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "/", "-", "+", ".", "Enter"]

let tab = []
let bool = false;

document.addEventListener("keypress", function (ev) {
    if (!touches.includes(ev.key)) { return }
    process(ev.key)
    //else{console.log(ev.key)}

})

document.querySelectorAll("input").forEach(function (el) {
    el.addEventListener("click", function (ev) {
        if (ev.target.value == 'C') {
            tab = [];
            affichage();
            return;
        }
        process(ev.target.value)
    })
})

function process(key) {
    if (!isNaN(key)) { //est un chiffre
        if (tab[0] == undefined) {
            tab[0] = key;
        }
        else if (!bool) {
            tab[tab.length - 1] += key.toString()
        }
        else {
            tab[tab.length] = key.toString()
            bool = false;
        }
    } else if (key == '.' && !bool) {
        if (tab[0] == undefined) { return } //à améliorer (.1 = 0.1)
        tab[tab.length - 1] += key.toString()
    }
    else if (key == 'Enter' || key == "=") {
        calcul()
        return;
    }
    else if (key == "-" && tab[0] == undefined) {
        tab[0] = '-'
    }
    else {
        if (tab[0] == undefined) { return }
        if (bool) { tab[tab.length - 1] = key }
        else { tab[tab.length] = key }
        bool = true
    }

    affichage()
}

function affichage() {
    document.querySelector('#ecran').textContent = ""
    for (let i = 0; i < tab.length; i++) {
        document.querySelector('#ecran').textContent += tab[i]
    }
}

function calcul() {

    if (tab[0] == undefined) { return }

    ////////////////////////à répeter n fois

    // let prio = []
    // let tabDef = []
    // for (let k = 0; k < tab.length; k++) {
    //     if (tab[k] == "*" || tab[k] == "/") {
    //         prio.push(k)
    //     }
    // }

    // for (let l = 0; l < tab.length; l++) {
    //     if (prio.includes(l + 1)) {
    //         switch (true) {
    //             case tab[l + 1] == "*":
    //                 let n = tab[l] * tab[l+2];
    //                 tabDef.push(n)
    //                 l += 2
    //                 break;
    //             case tab[l + 1] == "/":
    //                 let m = tab[l] / tab[l+2];
    //                 tabDef.push(m)
    //                 l += 2
    //                 break;
    //         }
    //     } else {
    //         tabDef.push(tab[l])
    //     }

    // }


    ////////////////////////


    let total = Number(tab[0])
    for (let j = 1; j < tab.length; j++) {
        if (!isNaN(tab[j])) { //est un chiffre
            switch (true) {
                case op == "+":
                    total += Number(tab[j])
                    break;
                case op == "-":
                    total += tab[j]
                    break;
                case op == "*":
                    total *= tab[j]
                    break;
                case op == "/":
                    total /= tab[j]
                    break;
            }
        } else {
            op = tab[j]
        }
    }

    /////////////////////////////////



    document.querySelector('#ecran').textContent = total
    tab = []
}
