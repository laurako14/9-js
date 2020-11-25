import { kiekis } from "./kiekis.js";
import { suma } from "./suma.js";
import { arPrasmingasSarasas, arNormalusSkaicius } from "./validation.js";

function vidurkis(duomenys) {
    if (!arPrasmingasSarasas(duomenys)) {
        return false;
    }

    const average = suma(duomenys) / kiekis(duomenys);

    if (!arNormalusSkaicius(average, 'vidurkio rezultatas')) {
        return false;
    }

    return average;
}

export { vidurkis };