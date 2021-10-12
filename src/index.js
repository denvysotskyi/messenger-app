import ReactDOM from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import App from './components/app/App'
import firebase from 'firebase/compat'
import { Context } from './context/context'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  nav {
    background: steelblue;
  }
  nav .brand-logo {
    font-size: 25px;
    display: none;
  }
  @media (min-width: 525px) {
    nav .brand-logo {
      display: block;
    }
  }
`

const theme = {
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 992px)',
    desktop: '(max-width: 1200px)',
    widescreen: '(max-width: 1439px)'
  }
}

firebase.initializeApp({
  apiKey: "AIzaSyB-7xkpF3KfFajRMyT69xcFcMo4twzW9Ko",
  authDomain: "messenger-app-d3a7e.firebaseapp.com",
  projectId: "messenger-app-d3a7e",
  storageBucket: "messenger-app-d3a7e.appspot.com",
  messagingSenderId: "1032901427479",
  appId: "1:1032901427479:web:0734c3272c337e26a07752",
  measurementId: "G-BCRCTWNNYP"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>
  </ThemeProvider>, document.getElementById('root')
)