import React from 'react'
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
const RequAuth = ({children}) => {
 const auth=useSelector(store=>store.AuthReducer.isAuth)
 console.log(auth)
 if(!auth){
   return <Navigate to="/login" replace />
 }
 else{
    return children
 }
}

export default RequAuth