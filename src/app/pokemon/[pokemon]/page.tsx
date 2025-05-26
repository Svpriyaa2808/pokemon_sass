import DisplayPokemon from "@/components/Displaypokemon";
import { PokemonType } from "@/utils/types";
import Link from "next/link";

let pokemonData:PokemonType
const PokemonPage = async  ({params}: {params: {pokemon:string}}) => {
    const {pokemon} =await params;

    try {
          
                    const API_URL: string = "https://pokeapi.co/api/v2"
                    const response: Response = await fetch(`${API_URL}/pokemon/${pokemon}`)
                    const data = await response.json();
        
                        pokemonData = {
                        id: data.id,
                        name: data.name,
                        image: data.sprites.front_default,
                        types: data.types.map((item: { type: { name: string; }; }) => item.type.name)
                    }
        
                   
                } catch (error) {
                    console.log(`Something went wrong: ${error}`)
                }

    return (
        <div className="pokemon__container">
            <DisplayPokemon {...pokemonData}/>
            <Link  className="pokemon__container--button" href="/types">Close</Link>
        </div>
    )
}

export default PokemonPage
        
    
