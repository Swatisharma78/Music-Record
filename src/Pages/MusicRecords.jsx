
import React from 'react'
import { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import{getMusic} from "../Redux/AppReducer/action"
import styled from "styled-components"
import {useSearchParams} from "react-router-dom"
import {useLocation,Link} from "react-router-dom"
const MusicRecords = () => {
    const musicRecord=useSelector((store)=>store.AppReducer.musicRecord)
    const dispatch=useDispatch()
    const [param]=useSearchParams()
    const location=useLocation()
    //console.log(musicRecord)
    useEffect(()=>{
if( location||musicRecord.length===0){
  const sortBy=param.get("sortBy")
 const queryParams={
  params:{
    genre:param.getAll("genre"),
    _sort:sortBy && "year",
    _order:sortBy

  }
 }
 //console.log(queryParams.params)
 dispatch(getMusic(queryParams))
}

    },[location.search])
   // console.log(location)
  return (
    <>
      {musicRecord.length>0 &&musicRecord.map((data)=>(
        <MusicRecordsWrapper key={data.id}>
          <Link to={`/music/${data.id}`}>
          <div><img src={data.img } alt="" />
          <h3>{data.name}</h3>
          <p>{data.genre}</p>
          <h5>{data.year}</h5>
          </div>
          </Link>

        </MusicRecordsWrapper>
      ))}

    </>
  )
}

export default MusicRecords


const MusicRecordsWrapper=styled.div`
width:300px;
border:1px solid black;
`