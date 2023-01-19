total = Number(prompt('Combien de notes voulez vous saisir?'))
let tab = []
let totalNotes = 0
let noteMin = 20
let noteMax = 0

for(let i = 0; i<total ; i++){
    let note = Number(prompt('note numéro '+(i+1)+":"))
    totalNotes += note
    if(note < noteMin){noteMin = note }
    if(note > noteMax){noteMax = note}
    document.querySelector("#liste").innerHTML += '<li>La note numéro '+(i+1)+' est de '+note+'/20.</li>'
    tab.push(note)
}

document.querySelector("#total").textContent = total
document.querySelector("#total1").textContent = total

document.querySelector('#noteMin').textContent = noteMin
document.querySelector('#noteMax').textContent = noteMax

document.querySelector('#moyenne').textContent = totalNotes / total
