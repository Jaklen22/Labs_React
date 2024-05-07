import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/home";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Movies from "./Components/Movies/Movies";
import Details from "./Components/Details/Details";
import Articles from "./Components/Articles/Articles";
import Article2 from "./Components/Article2/Article2";
import Article1 from './Components/Article1/Atricle1';
import Login from "./Components/Login/Login";
import { useState } from "react";
import FavoriteMovies from "./Components/FavoriteMovies/FavoriteMovies";
import { languageContext } from './Contexts/languageContext';
function App() {
  
 
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [lang, setLang] = useState('en');

  const handleLogin = () => {

    setLoggedIn(true);
    
    navigate('/favorites');
  };
  return (
    <div className="App" >
    <languageContext.Provider value={{ lang, setLang }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path='/favorites' element={loggedIn ? <FavoriteMovies /> : <Login  onLogin={handleLogin} />}/>
        <Route path="/articles" element={<Articles />}>
          <Route path="art1" element={<Article1/>} />
          <Route path="art2" element={<Article2/>} />
        </Route>
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </languageContext.Provider>

    </div>
  );
}

export default App;
