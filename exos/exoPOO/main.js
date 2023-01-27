import { moto } from "./Classes/moto.js";
import {vehicule} from "./Classes/vehicule.js"
import {voiture} from "./Classes/voiture.js"

let m = new voiture("Yamaha", "SuperRider", 30000, 2019)

console.log(m.display())