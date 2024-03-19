import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useState, useEffect } from 'react';
import './index.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
// import Home from './Components/Home.jsx'
import SeriesPage from './Components/Series.jsx'
import Kid from './Components/Kid.jsx'
import Movies from './Components/Movies.jsx'
import WatchMv from './Components/WatchMv.jsx'
import Xemphim from './Components/Xemphim.jsx';

// eslint-disable-next-line react-refresh/only-export-components
function Main() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App movies={movies}/>}></Route>
          <Route path='/Movies' element={<Movies data={movies}/>}/>
          <Route path='/Series' element={<SeriesPage data={movies} />}/>
          <Route path='/Kid' element={<Kid data={movies}/>}/>
          <Route path='/WatchMv/:name' element={<WatchMv />}/>
          <Route path='/Xemphim' element={<Xemphim />}/> {/* Đường dẫn bên ngoài */}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);