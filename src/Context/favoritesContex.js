import { createContext } from "react";


export const FavoritesContext=createContext({
    favoritos:[],
    updateFavoritos:(name)=>{
        console.log(name)
    }
})

export const FavoriteProvider=FavoritesContext.Provider
