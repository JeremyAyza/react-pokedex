export const searchPoke = async (p) => {
	let url = `https://pokeapi.co/api/v2/pokemon/${p}`
	try {
		const response = await fetch(url)
		const data = await response.json()

		return data
	} catch (error) {

	}
}

export const getPokemons = async (limit = 10, offset = 0) => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
		const reponse = await fetch(url)
		const data = await reponse.json()
		return data

	} catch (error) {

	}


}

 