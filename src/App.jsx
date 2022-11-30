import React, { useEffect, useState } from 'react';

import Searcbar from './Componentes/Searchbar';

import Navbar from './Componentes/Navbar';
import Pokedex from './Componentes/Pokedex';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FavoriteProvider } from './Context/favoritesContex';




function App() {

	const [favoritos, setFavoritos] = useState([])

	const updateFavoritos = (name) => {
		const newFavorites = [...favoritos];
		let i = newFavorites.indexOf(name)
		if (i >= 0) {
			newFavorites.splice(i, 1)
		}
		else {
			newFavorites.push(name)
		}
		setFavoritos(newFavorites)
		window.localStorage.setItem("keyPokemon", JSON.stringify(newFavorites))
	}

	const paginas = () => {
		const array = []
		for (let i = 1; i <= 10; i++) {
			array.push(
				<Link to={`/${i}`} key={i}><button className='bg-red-600 font-semibold rounded-full m-1 w-9 p-1 text-white border-black border-2'>{i}</button></Link>
			)
		}
		return array
	}


	useEffect(() => {
		const pokemons = JSON.parse(window.localStorage.getItem("keyPokemon")) || [];
		setFavoritos(pokemons);

	}, [])






	return (

		<div className="App min-h-screen	bg-emerald-500">
			<FavoriteProvider value={{
				favoritos: favoritos,
				updateFavoritos: updateFavoritos
			}}>

				<BrowserRouter>
					<Navbar />
					<Searcbar />
					<h2 className='text-center font-semibold text-3xl' > LISTA DE POKEMONS:</h2>
					<div className='flex justify-center'>
						<div className='w-5/6'>
							<h3 className='font-semibold p-1 text-xl border text-white inline m-1'>Páginas:</h3>
							<div className='border m-1'>{paginas()}</div>
						</div>
					</div>

					<div className='flex items-center justify-center '>

						<Routes>
							<Route path='/' element={<Pokedex />} />
							<Route path='/:page' element={<Pokedex />} />
						</Routes>

					</div>

				</BrowserRouter>
			</FavoriteProvider>



		</div>

	);
}

export default App;
