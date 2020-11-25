function arPrasmingasSarasas(duomenys) {
    if (!Array.isArray(duomenys)) {
        console.error('ERROR: duotas ne array.');
        return false;
    }
    if (duomenys.length === 0) {
        console.error('ERROR: duotas array yra tuscias.');
        return false;
    }
    return true;
}

function arNormalusSkaicius(duomenys, tikrinamoObjektoPavadinimas) {
    if (typeof tikrinamoObjektoPavadinimas !== 'string') {
        console.warn('WARNING: skaiciaus tipo tikrinimui nera duotas tikrinamo objekto pavadinimas.');
        tikrinamoObjektoPavadinimas = 'reiksme/objektas';
    }
    if (typeof duomenys !== 'number') {
        console.error(`ERROR: gautas ${tikrinamoObjektoPavadinimas} nera skaiciaus tipo.`);
        return false;
    }
    if (!isFinite(duomenys)) {
        console.error(`ERROR: gautas ${tikrinamoObjektoPavadinimas} nera tikras skaicius.`);
        return false;
    }
    return true;
}

export { arPrasmingasSarasas, arNormalusSkaicius }