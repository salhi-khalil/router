import {Route} from 'react-router-dom'
import {useState} from 'react'
import './App.css';
import Navbare from './Components/Navbare';
import Home from './Components/Home';
import Contact from './Components/Contact'
import {users}from './Components/data'
import Details from './Components/Details'
function App() {
const [login,setlogin]=useState(false);


  return (
    <div className="App">
       <Navbare login={login} setlogin={setlogin}  ></Navbare>
       <Route exact path='/' component={Home}></Route>
      
        {/* <Route path='/contact' >
           <Contact data= {Data} ></Contact>
                                         </Route>*/}  
       <Route path='/contact' render={()=> <Contact users= {users}></Contact>  } />   

       <Route path='/details/:id' render = {(props)=> <Details {...props}  users= {users} ></Details>      }    ></Route>                                                      
    </div>
  );
}

export default App;
