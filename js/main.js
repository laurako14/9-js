import { duomenys } from "./data/data.js";
import { suma } from "./components/suma.js";
import { vidurkis } from "./components/vidurkis.js";

console.log(duomenys);
console.log(suma(duomenys));
console.log(vidurkis(duomenys));

console.log(`Is pateiktu ${duomenys.length} skaiciu, vidurkis gaunasi: ${vidurkis(duomenys)}.`);

