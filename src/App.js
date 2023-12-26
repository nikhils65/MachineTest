import logo from './logo.svg';
import './App.css';
import{Routes,Route,Link} from 'react-router-dom';
import { lazy,Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './component/home';
import Mainscreen from './component/Mainscreen';





function App() {
  return (
    <div className='App'>
      
     {/* <Homepage/> */}
     <Mainscreen/>
      
   

    </div>    
  );
}

export default App;
