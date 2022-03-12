import { useState } from 'react'

import styled from '@emotion/styled'

import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'

import Spinner from './components/Spinner'


function App() {

    const [ resumen, setResumen ] = useState({});
    const [ cargando, setCargando ] = useState(false);

    return (
        <Contenedor>
            <Header titulo={'Cotizador de Seguros'} />
            <ContendorFormulario>
                <Formulario setResumen={ setResumen } setCargando={ setCargando } />

                { ( cargando )
                    ? <ContenedorSpinner>
                        <Spinner />
                      </ContenedorSpinner>
                    : ( resumen?.cotizacion ) 
                        ? <ContenedorResultado>
                            <Resumen datos = { resumen.datos } />
                            <Resultado cotizacion = { Number( resumen.cotizacion ) } />
                          </ContenedorResultado>
                        : <ContenedorSpinner> 
                            <h3>Elige una marca, un año y el tipo de seguro para cotizar</h3>
                          </ContenedorSpinner>
                }
            </ContendorFormulario>
        </Contenedor>
    )
}


const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 1rem;
`

const ContendorFormulario = styled.div`
    background-color: rgb(248 250 252);
    padding: 1rem 3rem 4.5rem 3rem;
    border-radius: 0 0 0.4rem 0.4rem;
`
const ContenedorResultado = styled.div`
    background-color: #FFF;
    padding: 2rem;
    margin-top: 3rem;
    border-radius: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;

    &::before{
        content: '';
        width: 1px;
        background-color: #CCC;
        position: absolute;
        top: 2rem;
        bottom: 2rem;
    }

    @media screen and ( max-width: 450px ) {
        &::before{
            width: 0;
        }
    }
`

const ContenedorSpinner = styled.div`
    height: 209px;
    background-color: #FFF;
    margin-top: 3rem;
    border-radius: 1rem;
    display: grid;
    place-items: center;
    h3{
        max-width: 20rem;
        text-align: center;
        line-height: 1.5rem;
        color: rgb(148 163 184);
        font-weight: normal;
    }
`

export default App
