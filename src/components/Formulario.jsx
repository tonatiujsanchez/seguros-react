import styled from "@emotion/styled"
import { useState } from 'react'
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from './../helpers/helper'



const Formulario = () => {

    const [ datos, setDatos ] = useState({
        marca: '',
        year: '',
        plan: 'basico'
    })
    const [ error, setError ] = useState(false);

    const { marca, year, plan } = datos;
    const getInformacion = ( e ) => {

        const nuevosDatos = { ...datos };
        nuevosDatos[ e.target.name ] = e.target.value;

        setDatos( nuevosDatos )
    } 


    const handleSubmit = ( e ) =>{
        e.preventDefault();

        if( [ marca.trim(), year.trim(), plan.trim() ].includes('') ){
            console.log( 'Todos los campos son obligatorios' );
            setError( true );
            return;
        }

        setError( false );

        // Base de 2000
        let resultado = 2000;

        // Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear( year );
        // Por cada año hay que restar el 3%
        const porcentajeDiferencia = ( (diferencia * 3) * resultado / 100 );
        resultado -= porcentajeDiferencia;

        // Americano incrmenta 15%
        // Asiatico incrmenta 5%
        // Europeo incrmenta 30%
        resultado = resultado * calcularMarca( marca );

        // Basico : 20%
        // Completo : 50%
        resultado = parseFloat(resultado * obtenerPlan( plan )).toFixed(2); 

        // Total
        console.log( resultado );
    }

  return (
    <form onSubmit={ handleSubmit }>
        <MensajeError error = { error }>Todos los campos son obligatorios</MensajeError>
        <Campo>
            <Label htmlFor="marca">Marca</Label>
            <Select name="marca" id="marca" value={ marca } onChange={ getInformacion }>
                <option value="">-- Seleccione --</option>
                <option value="americano">Americano</option>
                <option value="europeo">Europeo</option>
                <option value="asiatico">Asiatico</option>
            </Select>
        </Campo>
        <Campo>
            <Label htmlFor="year">Año</Label>
            <Select name="year" id="year" value={ year } onChange={ getInformacion }>
                <option value="">-- Seleccione --</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
            </Select>
        </Campo>
        <Campo>
            <Label htmlFor="">Plan</Label>
            <LabelRadio>
                <input 
                    type="radio" 
                    name="plan" 
                    value="basico" 
                    checked={ plan === 'basico' } 
                    onChange={ getInformacion }/>
                <span>Básico</span>
            </LabelRadio>
            <LabelRadio>
                <input 
                    type="radio" 
                    name="plan" 
                    value="completo" 
                    checked={ plan === 'completo' } 
                    onChange={ getInformacion }/>
                <span>Completo</span>
            </LabelRadio>
        </Campo>

        <Submit type="submit" value="Cotizar"/>
    </form>
  )
}


const Campo = styled.div`
    margin-bottom: 1.3rem;
`

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
`

const Select = styled.select`
    width: 100%;
    font-size: 1.1rem;
    padding: 0.9rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
`

const LabelRadio = styled.label`
    margin: 1rem;
    font-size: 1.2rem;
    span{
        margin-left: 0.5rem;
    }
`

const Submit = styled.input`
    display: block;
    margin-top: 2rem;
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 0.4rem;
    font-weight: bold;
    color: #FFF;
    background-color: rgb(59 130 246);
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color .3s ease;
    
    &:hover{
        background-color: rgb(37 99 235);
    }
`

const MensajeError = styled.div`
    padding: 0.8rem;
    text-align: center;
    background-color: white;
    border-left: 4px solid red;
    color: red;
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase;
    word-spacing: 1px;
    opacity: ${ props => props.error ? '1' : '0' };
`
export default Formulario