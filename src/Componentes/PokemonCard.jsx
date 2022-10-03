import React from 'react'




export default function PokemonCard({ data }) {
  const id = data.id
  const name = data.name;
  const urlImg = data.sprites.front_default
  const types = data.types.map(e => {
    return e.type.name
  }).join(", ")
  const abilities = data.abilities.map(e => {
    return e.ability.name
  }).join(", ")


  return (




    <div className="flex justify-between items-center    bg-slate-200 m-1 rounded-md w-96 h-36 capitalize	shadow-xl">
      <div className="px-3 py-2">
        <div><b>#:{id}</b></div>
        <div><b>Name:</b> {name}</div>
        <div><b>Types:</b> {types}</div>
        <div><b>Abilities:</b> {abilities}</div>
        <div>🖤</div>

      </div>

      <div>
        <img src={urlImg} alt="" className="px-1" />
      </div>
    </div>




  )
}


