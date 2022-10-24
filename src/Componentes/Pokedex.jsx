import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { searchPoke } from '../js/api';
import { useParams } from 'react-router-dom'



export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  const params = useParams()


  const fetchPokemons = async (page) => {
    try {
      let max = page * 10 * 2
      let min = max - 19


      const arrayPokemons = []
      for (let i = min; i <= max; i++) {
        const pokeObj = await searchPoke(i)
        arrayPokemons.push(pokeObj)
      }
      setPokemons(arrayPokemons)
    } catch (error) {
    }
  }


  useEffect(() => {
    setLoading(true)
    let page = 1
    if(params.page) page=params.page
    

    setTimeout(() => {
      fetchPokemons(page)
      setLoading(false)
    }, 700);
  }, [params.page])


  return (
    <div className='flex flex-wrap p-1 items-center  justify-around max-w-6xl'>
      {
        loading
          ?
          (<div className='mt-3 '><strong>CARGANDO. . .</strong></div>)
          :
          pokemons.map((poke) => {
            return (<PokemonCard key={poke.name} data={poke} />)
          })

      }

    </div>



  )
}
