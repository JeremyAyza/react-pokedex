import React, {  useState, } from "react";
import { searchPoke } from "../js/api";
import PokemonCard from "./PokemonCard";

export default function Searcbar() {

	const [search, setSearch] = useState("")
	const [pokemon, setPokemon] = useState({})

	const Resultado = () => {
		if (pokemon.name) {
			return <PokemonCard data={pokemon}></PokemonCard>
		}
		else if (pokemon.falla) {
			return (<div>No se encontró "{pokemon.falla}".</div>)
		}
		else {
			return <></>
		}
	}

	const onChangeSearch = (e) => {
		if (e.target.value !== "") {
			setSearch(e.target.value.toLowerCase())
		}
	}

	const buscar = async (e) => {
		const pokemonData = await searchPoke(search);
		if (pokemonData) {
			setPokemon(pokemonData)
		}
		else {
			setPokemon({ falla: search })
		}
	}







	return (
		<div className="bg-amber-400 p-1  flex items-center  flex-wrap justify-around" >

			<div className="mx-3 m-1 ">

				<input type="text"
					placeholder="Buscar Pokemón"
					onChange={onChangeSearch}
					className="border  rounded-md shadow-sm py-1 px-2 placeholder:italic capitalize"
				/>

				<button
					className="mx-3 border py-1 px-2 rounded-md font-semibold"
					onClick={buscar}>Search
				</button>

			</div>
			<Resultado />
		</div>
	)
}