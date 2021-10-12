import styled from 'styled-components'
import { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loader from '../components/loader/Loader'
import Message from '../components/message/Message'
import { Context } from '../context/context'

const ChatWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 70vh;
  border: 1px solid steelblue;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`
const MessageWrapper = styled.div`
`
const Row = styled.div`
`
const InputField = styled.div`
`
const Textarea = styled.textarea`
`
const Label = styled.label`
`
const ButtonWrapper = styled.div`
  @media ${props => props.theme.media.phone} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`
const Button = styled.button`
`
const LoaderWrapper = styled.div`
  margin: 0 auto;
`
const MessageList = styled.ul`
  margin: 30px 0 0 50px;
  @media ${props => props.theme.media.desktop} {
    margin-left: 25px;
  }
  @media ${props => props.theme.media.laptop} {
    margin-left: 20px;
  }
  @media ${props => props.theme.media.tablet} {
    margin-left: 15px;
  }
  @media ${props => props.theme.media.phone} {
    margin-left: 10px;
  }
`

const ChatPage = () => {

  const { firebase, auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)

  const [value, setValue] = useState('')

  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('')
  }

  return (
    <>
      <ChatWrapper className={'container'}>
        <LoaderWrapper>
          {
            loading
              ? <Loader />
              : null
          }
        </LoaderWrapper>
        <MessageList>
          {
            messages &&
            messages.map((message, idx) => <Message message={message}
                                                                                                 key={idx}
              />
            )
          }
        </MessageList>
      </ChatWrapper>
      <MessageWrapper className={'container'}>
        <Row className={'row'}>
          <InputField className={'input-field col s12'}>
            <Textarea value={value}
                      onChange={e => setValue(e.target.value)}
                      id={'textarea1'}
                      className={'materialize-textarea'}
            >
            </Textarea>
            <Label htmlFor={'textarea1'}>
              Сообщение
            </Label>
          </InputField>
        </Row>
        <ButtonWrapper className={'right'}>
          <Button onClick={sendMessage}
                  className={'btn waves-effect waves-light'}
          >
            Отправить
            <i className="material-icons right">
              send
            </i>
          </Button>
        </ButtonWrapper>
      </MessageWrapper>
    </>
  )
}

export default ChatPage