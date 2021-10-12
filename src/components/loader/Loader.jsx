import styled from 'styled-components'
import loader from '../../assets/images/loader.svg'

const LoaderWrapper = styled.div`
`
const Indicator = styled.img`
`

const Loader = () => (
  <LoaderWrapper>
    <Indicator src={loader}
               alt={'loader'}
    />
  </LoaderWrapper>
)

export default Loader