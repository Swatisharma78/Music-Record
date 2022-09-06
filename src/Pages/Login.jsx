
import { useState } from "react"
import React  from 'react'
import {useDispatch} from "react-redux"
import {loginfn} from "../Redux/AuthReducer/action"
const Login = () => {
  const [email, setMail]= useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(loginfn({email,password}))
  }
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <form action="" onSubmit={handleSubmit}>
      <div>  <label htmlFor="">Email</label>
        <input type="email" placeholder  ="email"  value={email}onChange={(e)=>setMail(e.target.value)}/></div>
       <div> <label htmlFor="">Password</label>
        <input type="password" placeholder ="password"  value={password}onChange={(e)=>setPassword(e.target.value)}/></div>
       
       
        <input type="submit" value ="submit"/>
      </form>
    </div>
  )
}

export default Login