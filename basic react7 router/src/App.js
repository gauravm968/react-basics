import './App.css';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';
import { Routes, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='app'>

      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
            {/* <Link to='/'>Home</Link> */}
          </li>
          <li>
            <NavLink to='/support'>Support</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/labs'>Labs</NavLink>
          </li>
        </ul>
      </nav>

      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}

      <Routes>
        {/* MainHeader -> parent component , other child components which is under MainHeader */}
        <Route path="/" element={<MainHeader />}>
          {/* default route */}
          <Route index element={<Home/>}/>
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
