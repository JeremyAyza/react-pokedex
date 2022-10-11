import React, { useEffect, useState } from 'react';

import Searcbar from './Componentes/Searchbar';
// import Pokedex from './Componentes/Pokedex'
// import { getDataPokemon, getPokemones } from "./js/api";
import Navbar from './Componentes/Navbar';
import Pokedex from './Componentes/Pokedex';
import { BrowserRouter, Routes,Route, Link, useParams } from 'react-router-dom';
import { FavoriteProvider } from './Context/favoritesContex';




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
  const [favoritos, setFavoritos] = useState(["bulbasaur","raichu"])
  const updateFavoritos=(name)=>{
    console.log(name);
  }
  
  
  const paginas=()=>{
    const array=[]
    for (let i = 1; i <= 10; i++) {
      array.push(
      <Link to={`/${i}`} key={i}><button className='bg-amber-400 p-2 rounded-sm m-1 w-8'>{i}</button></Link>
      )
    }
    return array
  }
  
  
 

  return (

    <div className="App min-h-screen	bg-red-600">
      <FavoriteProvider value={{
        favoritos:favoritos,
        updateFavoritos:updateFavoritos
      }}>
      
      <BrowserRouter>
      <Navbar/>
      <Searcbar/>
      <h2 className='text-center font-semibold text-3xl' > LISTA DE POKEMONS:</h2>
      
      <div className='flex items-center justify-center '>
        
        <Routes>
          <Route path='/' element={<Pokedex/>}/>
          <Route path='/:page' element={<Pokedex/>}/>
        </Routes>
             
      </div> 
      <h3 className='font-semibold text-xl'>
        Paginas: 
      </h3>
      {paginas()}
      </BrowserRouter>
      </FavoriteProvider>
      


    </div>

  );
}

export default App;
