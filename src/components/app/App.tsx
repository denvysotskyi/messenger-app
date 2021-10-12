import styled from 'styled-components'
import Navbar from '../navbar/Navbar'
import AppRouter from '../app-router/AppRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from '../loader/Loader'
import { useContext } from 'react'
import { FirebaseContext } from '../../context/context'

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
const LoaderWrapper = styled.div`
  margin-top: 20px;
`

const App = (): JSX.Element => {

  const { auth } = useContext(FirebaseContext)
  const [loading] = useAuthState(auth)

  return (
    <Router>
      <Main>
        <AppWrapper className={'container'}>
          <Navbar/>
          <LoaderWrapper>
            {
              loading
                ? <Loader />
                : null
            }
          </LoaderWrapper>
          <AppRouter/>
        </AppWrapper>
      </Main>
    </Router>
  )
}

export default App