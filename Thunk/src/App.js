import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';
import ViewUser from './Pages/ViewUser'
function App() {
  return (
   <>
   <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/addUser" element={<AddUser/>}/>
     <Route exact path="/editUser/:id" element={<EditUser/>}/>
     <Route exact path="/viewUser/:id" element={<ViewUser/>}/>
   </Routes> 
   </>
  );
}

export default App;


//https://www.youtube.com/watch?v=hXpYQqykORU

//to run
//npm run server
//npm start