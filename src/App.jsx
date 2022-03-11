import styled from '@emotion/styled'
import Header from './components/Header'
import Formulario from './components/Formulario'


function App() {


    return (
        <Contenedor>
            <Header titulo={'Cotizador de seguros'} />
            <ContendorFormulario>
                <Formulario />
            </ContendorFormulario>
        </Contenedor>
    )
}


const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
    margin-top: 5rem;
    padding: 1rem;
`

const ContendorFormulario = styled.div`
    background-color: rgb(248 250 252);
    padding: 1rem 3rem 4.5rem 3rem;
    border-radius: 0 0 0.4rem 0.4rem;
`


export default App
