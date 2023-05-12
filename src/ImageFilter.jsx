import React from 'react';
import alimentacion from './assets/images/alimentacion.svg';
import salud from './assets/images/salud.svg';
import otros from './assets/images/otros.svg';
import transporte from './assets/images/transporte.svg';
import utilidades from './assets/images/utilidades.svg';
import { Icon } from './Components/Variable';

export default (type) => {
    const Images = {
        Restaurante: <Icon src={alimentacion} alt='Restaurante' />,
        Salud: <Icon src={salud} alt='Salud' />,
        Transporte: <Icon src={transporte} alt='Transporte' />,
        Utilidades: <Icon src={utilidades} alt='Utilidades' />,
        default: <Icon src={otros} alt='Otros' />,
    }

    return Images[type] || Images['default'];
};