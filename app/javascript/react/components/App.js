import React from 'react'
import CourseIndexPage from './CourseIndexPage'
import CourseShowPage from './CourseShowPage'
import { BrowserRouter, Route, Switch } from "react-router-dom"


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CourseIndexPage} />
        <Route exact path="/courses" component={CourseIndexPage} />
        <Route exact path="/courses/:id" component={CourseShowPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App