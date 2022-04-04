import './App.css';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboards/Dashboards';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/review' element={<Reviews />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
