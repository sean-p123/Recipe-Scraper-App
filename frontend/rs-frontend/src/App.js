import Home from './Components/Pages/home';
import{Browser as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/Navbar';

function App() {
  return (
    <>
    <NavBar/>
    <div className='container'>
      <Routes>
        <Route path ="/" element={<Home/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
