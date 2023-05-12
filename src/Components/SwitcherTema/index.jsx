import React from "react";
import themeOn from '../../assets/images/themeOn.svg';
import themeOff from '../../assets/images/themeOff.svg';
import { Icon } from "../Variable";

export default ({ tema }) => {
    const claro = <Icon src={themeOn} alt="Tema claro" />
    const oscuro = <Icon src={themeOff} alt="Tema oscuro" />

    return tema ? oscuro : claro;
}