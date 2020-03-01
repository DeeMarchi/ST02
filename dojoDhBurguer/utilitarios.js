const utils = {
    temProps: (obj, listaDeProps) => {
        let propExiste = false;
    
        for (const prop of listaDeProps) {
            propExiste = obj.hasOwnProperty(prop);
            if (!propExiste) { break; }
        }
    
        return propExiste;
    },
};

module.exports = utils;
