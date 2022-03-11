import styled from '@emotion/styled'

const Header = ({ titulo }) => {
    return (
        <ContenedorHeader>
            <Titulo>{titulo}</Titulo>
        </ContenedorHeader>
    )
}

const ContenedorHeader = styled.header`
  background-color: rgb(59 130 246);
  padding: 1rem;
  font-weight: bold;
  color: #FFF;
  text-align: center;
  border-radius: 0.4rem 0.4rem 0 0;
`

const Titulo = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`


export default Header