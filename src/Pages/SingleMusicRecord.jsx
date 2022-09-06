

import React ,{useEffect,useState}from 'react'
import {useParams,Link} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"

import { getMusic } from '../Redux/AppReducer/action'
const SingleMusicRecord = () => {
  const {id}=useParams()
 const dispatch= useDispatch()
 const musicRecords=useSelector((store)=>store.AppReducer.musicRecord)
 const [currentalbum,Setalbum]=useState({})
 console.log(musicRecords)
 useEffect(() => {
 if(musicRecords.length ===0){
  dispatch(getMusic())
 }
 
 }, [dispatch, musicRecords.length])
 useEffect(() => {
if(id){
  let currentalbum=musicRecords.find(record=>record.id===id  );
  currentalbum&&Setalbum(currentalbum)
}
 },[id,musicRecords])
  return (
    <div>
      <h1>{currentalbum.name}</h1>
      <div>
        <Link to={`/music/${id}/edit`}>Edit</Link>
      </div>

    </div>
  )
}

export default SingleMusicRecord