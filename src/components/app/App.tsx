import styled from 'styled-components'
import Navbar from '../navbar/Navbar'
import AppRouter from '../app-router/AppRouter'
import { BrowserRouter as Router } from 'react-router-dom'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const AppWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = (): JSX.Element => (
  <Router>
    <Main>
      <AppWrapper className={'container'}>
        <Navbar/>
        <AppRouter/>
      </AppWrapper>
    </Main>
  </Router>
)

export default App