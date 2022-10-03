import { createContext } from "react";

const FavoriteContext=React.createContext(
    {
        pokemonesFavoritos:[],
        actualizarFavoritos:(id)=>null
    }
)

export const FavoriteProvider=FavoriteContext.Provider
export default FavoriteContext;