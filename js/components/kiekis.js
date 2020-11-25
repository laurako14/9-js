import { arPrasmingasSarasas, arNormalusSkaicius } from "./validation.js";

function kiekis(duomenys) {
    if (!arPrasmingasSarasas(duomenys)) {
        return false;
    }

    let amount = 0;

    for (let i = 0; i < duomenys.length; i++) {
        const skaicius = duomenys[i];
        if (typeof skaicius !== 'number') {
            continue;
        }
        amount ++;
    }

    if (!arNormalusSkaicius(amount, 'kiekio rezultatas')) {
        return false;
    }

    return amount;
}

export { kiekis } 