import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../context/context'

const FormWrapper = styled.div`
  margin-top: 80px;
`
const Form = styled.form`
`
const ButtonWrapper = styled.div`
`
const Button = styled(Link)`
`

const LoginPage = () => {

  const { auth, firebase } = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider)
  }

  return (
    <FormWrapper className={'row'}>
      <Form>
        <ButtonWrapper className={'center-align'}>
          <Button to={'/main'}
                  onClick={login}
                  className={'btn waves-effect waves-light'}
                  type={'submit'}
                  name={'action'}
          >
            Войти с помощью Google
            <i className={'material-icons right'}>
              send
            </i>
          </Button>
        </ButtonWrapper>
      </Form>
    </FormWrapper>
  )
}

export default LoginPage