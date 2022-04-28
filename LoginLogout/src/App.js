import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user=useSelector(selectUser)
  return (
    
    <>
   {/* <Login/>
   <Logout/> */}
  
   {
     user?<Logout/>:<Login/>
   }
    </>
  );
}

export default App;
