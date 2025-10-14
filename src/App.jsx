import { BrowserRouter } from 'react-router-dom'
import Rotas from './rotas/Rotas'
import './App.css'

//contexto
import { TemaContext } from './contexto/TemaContext'
import { useContext } from 'react'

//provedor de tema
import { ThemeProvider } from 'styled-components'
//temas
import { temaClaro, temaEscuro } from './styles/Temas'
// estilo global
import { GlobalStyle } from './styles/GlobalStyle'



function App() {
 
  const { tema , alternarTema} = useContext(TemaContext);

  return (
    
    <>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        <BrowserRouter>
          <Rotas/>
          <button onClick={alternarTema}>Alternar Tema</button>
        </BrowserRouter>
      </ThemeProvider>
      
    </>
  )
}

export default App
