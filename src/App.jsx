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
				<Link to={`/${i}`} key={i}><button className='bg-red-600 font-semibold rounded-full m-1 w-9 p-1 text-white border-black border-2 drop-shadow-md '>{i}</button></Link>
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
					<div className='flex justify-center items-center my-3 '>
						<div className='mx-12'>
							<h3 className='font-semibold p-1  text-xl text-white inline m-1'>Pages:</h3>
							<div className=' m-1  inline-block'>{paginas()}</div>
						</div>
					</div>
					{/*<h2 className='text-center font-medium text-4xl my-5 italic text-amber-700' >Pokemon Data:</h2>*/}


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
