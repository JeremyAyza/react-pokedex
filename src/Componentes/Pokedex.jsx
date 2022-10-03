import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import { searchPoke } from '../js/api';


export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const params=useParams()


  const fetchPokemons=async(page)=>{
    try {
      let min=10*page-9
      let max=page*10
     
      const arrayPokemons=[]
      for (let i = min; i <=max; i++) {
        const pokeObj = await searchPoke(i)
        arrayPokemons.push(pokeObj)
      }
      console.log(arrayPokemons);
      setPokemons(arrayPokemons)
    } catch (error) {
    }
  }
  
  
  useEffect(() => {
    if (params.page){
      let page=params.page
      if(page>0 && page<10){
        fetchPokemons(page)
      }


    }
    else{
      fetchPokemons(1)
    }
      
    
    
  }, [params.page])

  
  

  return (
    <div className='flex flex-wrap p-1 items-center  justify-around '>
      {
        pokemons.map((poke)=>{
          return(
            <PokemonCard 
              key={poke.name}
              data={poke}
              />
          )
        })
      
      }
      
    </div>
    
    
  )
}
