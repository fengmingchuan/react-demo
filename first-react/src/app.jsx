import React from 'react'
import Main from  './components/views/layout'
import Sub from './components/views/subject'
import Tea from './components/views/teachers'
import Info from './components/views/showInfo'
import Index from './components/views/index'
import NewsDetail from './components/views/detailNew'
import New  from './components/views/nws'
import {Switch,BrowserRouter as Router, Route,Redirect } from 'react-router-dom'
function App(){
    return(
        <div>
          
                 <Router>
                
                    <Switch>
                     <Route  path="/index" component={Index} />
                     <Route exact  path="/sub" component={Sub} />
                     {/* <Route path="/sub/:name" render={(props) => <div>{props.match.params.name}</div>}/>
                     <Route exact  path="/tea"  component={Tea} />
                     <Route exact path="/new"  component={New} />
                     <Route path="/new/:id" component={NewsDetail}/>
                     <Route path="/tea/info" component={Info} /> */}
                     <Route path="/"  render={(props)=><Main {...props} /> } />
                   
                       </Switch>
                 </Router>

        </div>
        
    )
}

export default App; 
