import './App.css';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import {Route, Routes} from "react-router-dom"

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <div className='container'>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </div>
    </>
  )
}

export default App;
