import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

function Rotes(){
  return (
    <BrowserRouter>
      {/* Without the exact, when you make a request /study, the first and the second page is shown */}
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  )
}

export default Rotes;