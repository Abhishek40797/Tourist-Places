import React, { useEffect, useState } from "react";
import { PokemonsList } from "./PokemonLists";

interface IPokemons {
    name : string,
    url : string
}

export const Pokemons = ()=>{
    const [pokemons,getPokemons] = useState<IPokemons[]>([])

    const fetchPokemonsApi = async ()=>{
        const res = await (await fetch("https://pokeapi.co/api/v2/pokemon/")).json()
        PokemonsURL(res.results)
    }

    const PokemonsURL = async (res:IPokemons[])=>{
        res.map( async (pokeurl)=>{
            const result = await (await fetch(pokeurl.url)).json()
            getPokemons((prevValue)=>{
                prevValue = [...prevValue,result]
                return prevValue;
            })
        })
    }

    useEffect(()=>{
        fetchPokemonsApi()
    },[])

    return (
        <>
            <div className="container">
                <h3>Pokemons</h3>
                <PokemonsList pokemons={pokemons} />
            </div>
        </>
    )
}