export const searchPoke = async (p) => {
	let url = `https://pokeapi.co/api/v2/pokemon/${p}`
	try {
		const response = await fetch(url)
		const data = await response.json()
		return data
	} catch (error) {
		return false
	}
}

export const getPokemons = async (offset) => {
	try {
		
		let url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
		const reponse = await fetch(url)
		const data = await reponse.json()
		return data.results
		
	} catch (error) {

	}


}


export const getPokemonUrl = async (url) => {
	try {
		const response = await fetch(url)
		const data = await response.json()
		return data
	} catch (error) {
		return false
	}
}
 