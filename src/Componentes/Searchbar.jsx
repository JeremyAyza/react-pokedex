import React, { useState, } from "react";
import { searchPoke } from "../js/api";



export default function Searcbar() {



	const [search, setSearch] = useState("")
	const [pokemon, setPokemon] = useState(
		{
			name: "",
			urlImg: "",
			types: ""
		}
	)

	const onChangeSearch = (e) => {
		if (e.target.value !== "") {
			setSearch(e.target.value)

		}
	}

	const buscar = async (e) => {
		const pokemonObj = await searchPoke(search);
		const newPokemon = {
			name: pokemonObj.name,
			urlImg: pokemonObj.sprites.front_default,
			types: pokemonObj.types.map(e => {
				return e.type.name
			}).join(", ")


		}
		console.log(newPokemon);
		setPokemon(newPokemon)
	}







	return (
		<div className="bg-amber-400 p-1  flex items-center capitalize flex-wrap justify-around" >

			<div className="mx-3 m-1 ">

				<input type="text"
					placeholder="Buscar Pokemón"
					onChange={onChangeSearch}
					className="border  rounded-md shadow-sm py-1 px-2 placeholder:italic" 
				/>

				<button className="mx-3 border py-1 px-2 rounded-md font-semibold"
				onClick={buscar}>Search</button>

			</div>

			{
				pokemon.name && (
					<div className="grow bg-sky-700 m-1 rounded-md max-w-lg	">

						<div className="flex justify-around items-center text-white ">
							<div className="px-1">
								<div><b>Name:</b> {pokemon.name}</div>
								<div><b>Types:</b> {pokemon.types}</div>

							</div>
							
							<div>
								<img src={pokemon.urlImg} alt="" className="px-1"/>
							</div>
						</div>

					</div>
				)
			}




		</div>
	)
}
