import './index.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
// import Home from './pages/Home';
import Login from './pages/Login';
import Home from './pages/Home';



function App() {
  return (
    <> 
     <Router>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/Login' element={<Login/>}/>
      </Routes>
     </Router>
      
    </>
  );
}

export default App;
