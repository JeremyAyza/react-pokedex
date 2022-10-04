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




    <div className="flex  items-center font-semibold  px-3  bg-slate-200 m-1 rounded-md w-80 h-36 capitalize	shadow-xl ">
      
      <div className='border-zinc-800 mx-2'>
        <img src={urlImg} alt="" className="" />
      </div>

      
      <div className='border-zinc-800 grow mx-2'>
        <div className='text-red-600 text-xl'>{name}</div>
        <div className='text-blue-600'>{types}</div>
        <div></div>
      </div>

      <div className="border-zinc-800 mx-2">
        <div><b>#{id}</b></div>
        <div>🖤</div>

      </div>
      

      
    </div>




  )
}


