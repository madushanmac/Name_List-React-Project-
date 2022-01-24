
import './App.css';

import {BrowserRouter ,Route , Switch } from 'react-router-dom'; // this should be have for a do routing 
import NameList from './Components/pages/NameList/NameList';
import HeaderBar from './Components/NavBar/HeaderBar';
import About from './Components/pages/about/About';
import Home from './Components/pages/home/Home';





function App() {
  return (
   <>
   <HeaderBar/>
   <BrowserRouter>
     <Switch>
        <Route path="/"><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/namelist"><NameList/></Route>

       </Switch>
   </BrowserRouter>
   </>
  );
}

export default App;
