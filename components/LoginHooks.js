import React, { Component } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
// import {userContext} from './userContext';


class LoginHooks extends Component {
  state = {
    currentUser: {}
  };

  render() {
    return (
      
      <div>
        
          <GoogleLogin
            onSuccess={credentialResponse => {
              const userObject = jwt_decode(credentialResponse.credential);
              const { name, email, picture } = userObject;
              this.setState({
                uobj: userObject
              })
              this.setState({
                currentUser: {
                  name: name,
                  email: email,
                  pic: picture,
                }
              });
            }}  
            onError={() => {
              console.log('Login Failed');
            }}
          />
      </div>
    );
  }
}

export default LoginHooks;
