import '../styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
// import {userContext} from '../components/userContext';


function MyApp({ Component, pageProps }) {

  return (
    // <userContext.Provider value={this.state.currentUser}>
      <GoogleOAuthProvider clientId="842383048916-etubeamk7ifak28fpeb62uigctesh2js.apps.googleusercontent.com">
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    // </userContext.Provider>
  )};

export default MyApp
