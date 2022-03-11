

const obtenerDiferenciaYear = ( year ) => {
    return new Date().getFullYear() - year;
}


const calcularMarca = ( marca ) => {
    
    let incremento = 1;

     switch( marca ){
         case 'europeo':
             incremento = 1.30;
             break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            incremento = 1;
            break;

        }
    
    return incremento; 

} 

const obtenerPlan = ( plan ) => {
    return ( plan === 'basico' ? 1.20 : 1.50 )
}

export {
    obtenerDiferenciaYear,
    calcularMarca,
    obtenerPlan
}