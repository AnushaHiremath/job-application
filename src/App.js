import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import ApplicationForm from './ApplicationForm'
import AdminDashboard from './AdminDashboard'

function  App(props) {
    return( 
        <BrowserRouter>
        <div>
            <h2>User Job Application</h2>
             <Route path="/" component={ApplicationForm} exact={true}/>
             <Route path="/admin" component={AdminDashboard}/>
        </div>
        </BrowserRouter>
        
    )
}

export default App