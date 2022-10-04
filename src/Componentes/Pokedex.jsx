import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import { searchPoke } from '../js/api';


export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  
  const params=useParams()


  const fetchPokemons=async(page)=>{
    try {
      let max=page*10*2
      let min=max-19
      
     
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
    setLoading(true)
    
    if (params.page){
      let page=params.page
      if(page>0 && page<=10){
        fetchPokemons(page)
        setTimeout(() => {
          setLoading(false)
        }, 500);
        
      }


    }
    else{
      fetchPokemons(1)
    }
      
    
    
  }, [params.page])

  
  

  return (
    <div className='flex flex-wrap p-1 items-center  justify-around max-w-6xl'>
      <h2>POKEDEX:</h2>
      {

        loading?(<div className='mt-3'><strong>CARGANDO. . .</strong></div>):
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
