import React, { useEffect, useState } from 'react';

import Searcbar from './Componentes/Searchbar';
// import Pokedex from './Componentes/Pokedex'
// import { getDataPokemon, getPokemones } from "./js/api";
import Navbar from './Componentes/Navbar';
import Pokedex from './Componentes/Pokedex';
import { BrowserRouter, Routes,Route, Link, useParams } from 'react-router-dom';




function App() {

  // funciones
 
  // const fetchPokemons=async()=>{
  //   try {
  //     const data=await getPokemons()
  //     setDataPokemons(data.results)
  //     console.log(data.results);
  //   } catch (error) {
      
  //   }
  // }

  const params=useParams()
  useEffect(() => {
    
    console.log(params);
  }, [])
  
  
 

  return (

    <div className="App min-h-screen	bg-red-600">
      
      <BrowserRouter>
      <Navbar/>
      <Searcbar/>
      <Routes>
        <Route path='/' element={<Pokedex/>}/>
        <Route path='/:page' element={<Pokedex/>}/>
      </Routes>
      <div>
        Pagina:
        <Link to="/2"><button className='bg-amber-400 p-3'>2</button></Link>
        <Link to="/3"><button className='bg-amber-400 p-3'>3</button></Link>
      </div>
      
      </BrowserRouter>
      


    </div>

  );
}

export default App;
