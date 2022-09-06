
import React ,{useEffect,useState}from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"

import { getMusic, updatemusic } from '../Redux/AppReducer/action'
const EditMusicRecord = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const dispatch= useDispatch()
  const musicRecords=useSelector((store)=>store.AppReducer.musicRecord)
  //const [currentalbum,Setalbum]=useState({})
  const[musicName,setName]=useState("")
  const [artistName,setArtist]=useState("")
  console.log(musicRecords)
  // useEffect(() => {
  // if(musicRecords.length ===0){
  //  dispatch(getMusic())
  // }
  
  // }, [dispatch, musicRecords.length])
  const  handlesubmit=(e)=>{
    e.preventDefault()
  if(musicName && artistName){
      
   const payload={
    name:musicName, artist:artistName
  
  }
  dispatch(updatemusic(id,payload)).then(()=>{return dispatch(getMusic())
  })
  navigate("/")
  }
    }
  useEffect(() => {
 if(id){
   const  currentalbum=musicRecords.find(record=>record.id===id  );
   //currentalbum&&Setalbum(currentalbum)
if(currentalbum){
  setName(currentalbum.name)
  setArtist(currentalbum.artist)
}
 }
  },[id,musicRecords])

  console.log(musicName)
  return (
    <div>
      <h1>Edit Page</h1>
      <form action="" onSubmit={handlesubmit}>
        <div>
          <label>Music name</label>
          <input type="text" value={musicName} onChange={e=>setName(e.target.value)} />

        </div>
        <div>
          <label htmlFor="">Artist Name</label>
          <input type="text" value={artistName} onChange={e=>setArtist(e.target.value)} />
        </div>
<button type="submit" >Update</button>
      </form>
    </div>
  )
}

export default EditMusicRecord