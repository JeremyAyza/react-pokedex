import React, { useEffect, useState } from 'react';

import Searcbar from './Componentes/Searchbar';

import Navbar from './Componentes/Navbar';
import Pokedex from './Componentes/Pokedex';
import { BrowserRouter, Routes,Route, Link} from 'react-router-dom';
import { FavoriteProvider } from './Context/favoritesContex';




function App() {

  const [favoritos, setFavoritos] = useState([])

  const updateFavoritos=(name)=>{
    const newFavorites=[...favoritos];
    let i=newFavorites.indexOf(name)
    if(i>=0){
      newFavorites.splice(i,1)
    }
    else{
      newFavorites.push(name)
    }
    setFavoritos(newFavorites)
    window.localStorage.setItem("keyPokemon", JSON.stringify(newFavorites))
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

  

  useEffect(() => {
    const pokemons=JSON.parse(window.localStorage.getItem("keyPokemon")) || [];
    setFavoritos(pokemons);
    
  },[])
  


  
 

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
