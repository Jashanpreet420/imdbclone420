import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './header/Header';
import Home from './page/home/Home';
import MovieList from './movieList/movieList';
import Movie from './page/moviedetail/Movie';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Routes>
        <Route index element={ <Home /> } > </Route>
        <Route path="movie/:id" element={ <Movie />}></Route>
        <Route path="movies/:type" element={<MovieList /> }></Route>
        <Route path="/" element={<h1> error page</h1> }></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
