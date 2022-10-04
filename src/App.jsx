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
  
  const paginas=()=>{
    const array=[]
    for (let i = 1; i <= 10; i++) {
      array.push(
      <Link to={`/${i}`}><button className='bg-amber-400 p-2 rounded-sm m-1'>{i}</button></Link>
      )
    }
    return array
  }
  
  
 

  return (

    <div className="App min-h-screen	bg-red-600">
      
      <BrowserRouter>
      <Navbar/>
      <Searcbar/>
      <div>
        Paginas:{paginas()}
      </div>
      <div className='flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Pokedex/>}/>
        <Route path='/:page' element={<Pokedex/>}/>
      </Routes>     
      </div> 
      </BrowserRouter>
      


    </div>

  );
}

export default App;
