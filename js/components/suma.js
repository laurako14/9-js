import { arPrasmingasSarasas, arNormalusSkaicius } from "./validation.js";

function suma(duomenys) {
    if (!arPrasmingasSarasas(duomenys)) {
        return false;
    }

    let rez = 0;
    for (let i = 0; i < duomenys.length; i++) {
        const skaicius = duomenys[i];

        if (typeof skaicius !== 'number') {
            console.warn('WARNING: skaiciu sarase rasta ne skaiciaus tipo reiksme.');
            continue;
        }

        rez += skaicius;
    }

    if (!arNormalusSkaicius(rez, 'sumos rezultatas')) {
        return false;
    }

    return rez;
}

export { suma };