import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Homecom from './Routes/Homecom';

function App() {
  return (
   <>                                     
   <Routes>
<Route path='/' element={<Homecom/>}/>
<Route path='Home' element={<Homecom/>}/>

   </Routes>
   
   
   </>
  );
}

export default App;
