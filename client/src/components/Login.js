import React, {useState} from "react";
import axios from 'axios'


const initial = {
  username: '',
  password: '',
}
const Login = () =>{
  const [data, setData]=useState(initial)

  const handleChange = (event) =>{

    setData({
        ...data,
        [event.target.name]:event.target.value
    })
}

const handleSubmit = (event) =>{
    event.preventDefault()    
  }
  axios.post('http://localhost:5000/api/login', data)
  .then(res =>{
      localStorage.setItem('token',res.data.payload)
      .push('/bubble-page')
  })
  .catch(error => {
      console.log(error)
  })
 
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    return(
      <div>
        <h1>Welcome to the Bubble App</h1>
        <form className ='' onSubmit={handleSubmit}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={data.username}
            onChange={handleChange}
            
          />

          <input
          type='password'
          name='password'
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          

          />
          <button onClick ={handleSubmit}>Login!</button>
        </form>
      </div>
    )
  }

  

export default Login;
