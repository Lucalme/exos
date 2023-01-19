document.querySelector("select").addEventListener("change", function (){
    document.querySelector("#slct").textContent = "vous avez séléctionné l'id "+ document.querySelector("select").value
})


let chenil = [
    {
        nom : "Max",
        race : "Caniche",
        age : 12
    },
    {
        nom : "Médor",
        race : "Shiba",
        age : 9
    }
]


function ajouter(){
    let chien = {
        nom : document.querySelector("#nom").value,
        race : document.querySelector("#race").value,
        age : document.querySelector("#age").value
    }
    chenil.push(chien)
    document.querySelector("select").innerHTML += "<option value="+(chenil.length-1)+" >"+chien.nom+"</option>"
}