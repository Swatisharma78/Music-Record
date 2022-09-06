import * as types from "./actionTypes"
import axios from "axios"

export const getMusic=(params)=>(dispacth)=>{
    console.log(params)
    dispacth({type:types.GET_ALBUMS_REQUEST})
    return axios.get(`  http://localhost:8080/albums`,params).then((r)=>{

        return dispacth({type:types.GET_ALBUMS_SUCCESS,payload:r.data})
    }).catch((err)=>dispacth({type:types.GET_ALBUMS_ERROR}))
    }

    export const updatemusic=(id,payload)=>dispacth=>{
   dispacth({type:types.UPDATE_ALBUMS_REQUEST})
   return axios.patch(` http://localhost:8080/albums/${id}`,payload).then((r)=>{
    return dispacth({type:types.UPDATE_ALBUMS_SUCCESS})
   }).catch((err)=>dispacth({type:types.UPDATE_ALBUMS_ERROR}))
    }