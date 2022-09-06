
import React from 'react'
import {Routes,Route } from "react-router-dom"

import SingleMusicRecord from './SingleMusicRecord'
import EditMusicRecord from './EditMusicRecord'
import Login from './Login'
import Homepage from './Homepage'
import RequAuth from '../Components/RequAuth'
const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Homepage />} />
  <Route path="/music/:id" element={<RequAuth> <SingleMusicRecord /></RequAuth>
   
  } />
  <Route path="/music/:id/edit" element={<RequAuth>  <EditMusicRecord /></RequAuth>
  
  } />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<h3>Page Not Found</h3>} />

        </Routes>

    </div>
  )
}

export default MainRoutes
