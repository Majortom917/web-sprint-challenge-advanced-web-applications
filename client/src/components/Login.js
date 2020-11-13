import React from "react";
import {axiosWithAuth} from '../utils/axiosAuth'

const Login = () => {
  state = {
    credentials:{
      username:'',
      password:''
    }
  }
  login = e =>{
    e.preventDefault();

    axiosWithAuth()
    .post('/api/login', this.state.credentials)
    .then(res =>{
      window.localStorage.setItem('token', res.data.payload)
      this.props.history.push('/protected')
    })
    .catch(err => console.log(err))
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  render(){
    return(
      <div>
        <form>
          <input
            type='text'
            name='username'
            placeholder='1'
            value={}
            onChange={this.handleChange}
          />

          <input
          type='password'
          name='password'
          placeholder="2"
          value={}
          onChange={this.handleChange}

          />
          <button>Log In</button>
        </form>
      </div>
    )
  }
  

export default Login;
