import styled from "@emotion/styled";
import PropTypes from 'prop-types'

import { capitalize } from './../utilities/utilities'

const Resumen = ({ datos }) => {
    
    const { marca, year, plan } = datos;

    return (
    <div>
        <Titulo>Resumen</Titulo>
        <Lista>
            <li><Dato>Marca:</Dato> <span>{ capitalize( marca ) }</span></li>
            <li><Dato>Año:</Dato> <span>{ year }</span></li>
            <li><Dato>Plan:</Dato> <span>{ capitalize( plan ) }</span></li>
        </Lista>
    </div>
  )
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

const Titulo = styled.h2`
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: rgb(51 65 85);
`

const Lista = styled.ul`
    margin-top: 0;
    padding: 0;
`

const Dato = styled.span`
    display: inline-block;
    min-width: 3.8rem;
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: .3rem;
    color: rgb(51 65 85);
`

export default Resumen

