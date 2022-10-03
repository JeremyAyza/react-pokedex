import React, { createContext } from "react";


const PokemonesContext=React.createContext({
    Pokemones:[]
    
});

export const PokemonesProvider=PokemonesContext.Provider
export default PokemonesContext;