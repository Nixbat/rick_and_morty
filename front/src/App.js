import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Video from "./components/assets/images/video-fondo.mp4";
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';



function App () {  
  //-----------------HOOKS-----------------------------------------------
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  //-----------------CREDENCIALES LOGIN----------------------------------
  const username = "proyecto@gmail.com";
  const password = "123nbs";

  //----------------EVENT HANDLERS--------------------------------------  
  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";      

    if(characters.find((char) => char.id === id)) {
      return alert ("Personaje repetido");
    }   

    fetch(`${URL_BASE}/onsearch/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.name) {        
        setCharacters((oldChars) => [...oldChars, data]);             
      } else {                         
         return alert("No hay personajes con ese ID");
      }
    });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) => {
    if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };  

  return (
    <div className='App' style={{ padding: '20px' }}>
      <video autoPlay loop muted><source src={Video} type='video/mp4'/></video>      
      <div>
        {pathname !== "/" && <Nav onSearch={onSearch} />}      
        <Routes>
           <Route path="/" element={<Form login={login} />} />
           <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
           <Route path="/about" element={<About />} />
           <Route path="/favorites" element={<Favorites />} />
           <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>               
        </div>                                                    
    </div>    
  );
}

export default App;
