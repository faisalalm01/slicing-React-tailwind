import './index.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
// import Home from './pages/Home';
import Login from './pages/Login';
import Home from './pages/Home';
import Kategori from './pages/Kategori';
import Description from './pages/Description';
import Profile from './pages/Profile';
import Book from './pages/Books';




function App() {
  return (
    <> 
     <Router>
      <Routes>
      <Route path='/Login' element={<Login/>}/>
       <Route path='/' element={<Home/>}/>
       <Route path='/Kategori' element= {<Kategori/>} />
       <Route path='/Desc' element= {<Description/>} />
       <Route path='/Profile' element= {<Profile/>} />
       <Route path='/Books' element= {<Book/>} />
      </Routes>
     </Router>
      
    </>
  );
}

export default App;
