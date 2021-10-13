import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useContext } from 'react'
import { FirebaseContext } from '../../context/context'

const Nav = styled.nav`
  margin-bottom: 20px;
`
const NavWrapper = styled.div`
`
const Logo = styled(Link)`
`
const ButtonWrapper = styled.div`
`
const Button = styled(Link)`
  margin-right: 15px;
`
const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`

const Navbar = (): JSX.Element => {

  const { auth, firebase } = useContext(FirebaseContext)
  const [user] = useAuthState(auth)

  const logout = (): Promise<typeof firebase.auth> => firebase.auth().signOut()

  return (
    <Nav>
      {
        user
          ? <NavWrapper>
            <Logo to={'/chat'}
                  className={'brand-logo center'}
            >
              Messenger
            </Logo>
            <ButtonWrapper className={'right'}>
              <Button to={'/login'}
                      onClick={logout}
                      className={'waves-effect waves-light btn'}>
                Выйти
                <i className={'material-icons right'}>
                  exit_to_app
                </i>
              </Button>
            </ButtonWrapper>
          </NavWrapper>
          : <NavWrapper>
            <Logo to={'/chat'}
                  className={'brand-logo center'}
            >
              Messenger
            </Logo>
            <LoginWrapper className={'right'}>
              Логин
            </LoginWrapper>
          </NavWrapper>
      }
    </Nav>
  )
}

export default Navbar