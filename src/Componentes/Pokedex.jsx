import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { getPokemons, searchPoke } from '../js/api';
import { useParams } from 'react-router-dom'



export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
	const [validPage, setValidPage] = useState(true)
  const params = useParams()

	

  const fetchPokemons = async (page) => {
    try {
			setLoading(true)
			const offset=(page-1)*10
			const data=await getPokemons(offset);
			const promesasSearchPokemon = data.map(async (d) => await searchPoke(d.name))
			const arrayData = await Promise.all(promesasSearchPokemon)
			setPokemons(arrayData)
			setLoading(false)
    } catch (error) {
    }
  }


  useEffect(() => {

		if(!params.page){
			fetchPokemons(1)
		}
		else if(parseInt(params.page)&& params.page>=1 && params.page<=50){
			fetchPokemons(params.page)  
			setValidPage(true)
		}
		else{
			setValidPage(false)
		}
		
  },[params.page,params])

	const result = (validPage,loading)=>{
		let rpt
		if (!validPage) rpt = (<div>RUTA INCORRECTA</div>)
		else if (loading) rpt= (<div>CARGANDO...</div>)
		else rpt=pokemons.map((poke) => <PokemonCard key={poke.name} data={poke} />)
		return rpt
	}


  return (
    <div className='flex flex-wrap p-1 items-center  justify-around max-w-6xl'>
			{result(validPage, loading)}
    </div>



  )
}
