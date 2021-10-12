import styled from 'styled-components'
import { MessageType } from './Message.props'

const MessageWrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #26a69a;
  width: 95%;
  min-height: 70px;
  color: white;
  @media ${props => props.theme.media.phone} {
    flex-direction: column;
  }
`
const AvatarWrapper = styled.div`
  margin: 5px 0 0 5px;
  @media ${props => props.theme.media.desktop} {
    margin-left: 7px;
  }
  @media ${props => props.theme.media.laptop} {
    margin-left: 10px;
  }
  @media ${props => props.theme.media.phone} {
    margin-top: 10px;
  }
`
const Avatar = styled.img`
  width: 70px;
  height: 70px;
`
const TextWrapper = styled.div`
  width: 90%;
  margin-left: 15px;
  min-height: 40px;
  word-wrap: break-word;
  overflow-x: hidden;
  padding: 10px;
  
`
const Name = styled.div`
  margin-right: 4px;
  font-weight: 600;
  margin-bottom: 5px;
`
const Text = styled.div`
  font-style: italic;
`

const Message = ({ message: { displayName, text, photoURL }}: MessageType): JSX.Element => (
  <MessageWrapper>
    <AvatarWrapper>
      <Avatar src={photoURL}
              alt={'avatar'}
      />
    </AvatarWrapper>
    <TextWrapper>
      <Name>
        {displayName}:
      </Name>
      <Text>
        {text}
      </Text>
    </TextWrapper>
  </MessageWrapper>
)

export default Message