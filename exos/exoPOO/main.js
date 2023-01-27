import { moto } from "./Classes/moto.js";
import {vehicule} from "./Classes/vehicule.js"
import {voiture} from "./Classes/voiture.js"

let m = new voiture("Tesla", "Model X", 90000, 2019, 'climatisée')
let n = new moto("Yamaha", "SuperCharger", 45000, 2018 )

document.querySelector("#list").innerHTML += "<li>" + m.display() + "</li><li>" +n.display() +'</li>'

