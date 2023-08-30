import Home from './Components/Pages/home';
import { GetRecipe } from './Components/Pages/getRecipe';
import{Browser as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/Navbar';
import Library from './Components/Pages/library';
import AddRecipe from './Components/Pages/addRecipe';
import SearchRecipe from './Components/Pages/searchRecipe';
function App() {
  return (
    <>
    <NavBar/>
    <div className='container'>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/library" element={<Library/>}/>
        <Route path ="/recipe" element={<GetRecipe/>}/>
        <Route path ="/addRecipe" element={<AddRecipe/>}/>
        <Route path ="/searchRecipe" element={<SearchRecipe/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
