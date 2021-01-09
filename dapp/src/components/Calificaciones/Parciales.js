const Parciales = ({parciales}) => {

    let notaFinal = 0;
    let parcialesSinRep = [] // Las notas las pushea dos veces (¿?)
    for (let i = 0; i < parciales.length; i+= 2)
        parcialesSinRep.push(parciales[i]);

    for (let i = 0; i < parcialesSinRep.length; i++)
        notaFinal += parcialesSinRep[i];

    if (notaFinal > 10)
        notaFinal = 10;

    return <td>{notaFinal}</td>

};

export default Parciales;