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
    let page=1
    if(params.page) {
      page=params.page;
    }
    
      fetchPokemons(page)
      setTimeout(() => {
        setLoading(false)
      }, 5000);
      
  
    
    
  }, [params.page])

  
  

  return (

   
    
    <div className='flex flex-wrap p-1 items-center  justify-around max-w-6xl'>
      
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
