import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/contact' element={<Home />} />
      </Routes>
    </Navbar>
  );
}

export default App;
