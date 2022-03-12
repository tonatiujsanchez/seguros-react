import styled from "@emotion/styled"
import PropTypes from 'prop-types'


const Resultado = ({ cotizacion }) => {
  
  return (
    <ContenedorCotizacion>
        <Titulo>Cotización</Titulo>
        <Cotizacion>$ { cotizacion }</Cotizacion>
    </ContenedorCotizacion>
  )
}


Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired
}


const ContenedorCotizacion = styled.div`
    text-align: center;
`

const Titulo = styled.h2`
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: rgb(51 65 85);
`
const Cotizacion = styled.p`
    font-weight: bold;
    font-size: 1.7rem;
    margin-top: .8rem;
    color: rgb(51 65 85);
`


export default Resultado