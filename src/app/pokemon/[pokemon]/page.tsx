// import DisplayPokemon from "@/components/Displaypokemon";
// import { PokemonType } from "@/utils/types";
// import Link from "next/link";

// interface PageProps {
//     params: {
//       pokemon: string;
//     };
//   }
  
 
  

// let pokemonData:PokemonType
// export default async function PokemonPage ({params}: PageProps) {
//     const {pokemon} =params;

//     try {
          
//                     const API_URL: string = "https://pokeapi.co/api/v2"
//                     const response: Response = await fetch(`${API_URL}/pokemon/${pokemon}`)
//                     const data = await response.json();
        
//                         pokemonData = {
//                         id: data.id,
//                         name: data.name,
//                         image: data.sprites.front_default,
//                         types: data.types.map((item: { type: { name: string; }; }) => item.type.name)
//                     }
        
                   
//                 } catch (error) {
//                     console.log(`Something went wrong: ${error}`)
//                 }

//     return (
//         <div className="pokemon__container">
//             <DisplayPokemon {...pokemonData}/>
//             <Link  className="pokemon__container--button" href="/types">Close</Link>
//         </div>
//     )
// }


import DisplayPokemon from "@/components/Displaypokemon";
import { PokemonType } from "@/utils/types";
import Link from "next/link";

type PageProps = Promise<{ pokemon: string }>;
export default async function PokemonPage({ params }: {params:PageProps}) {
  const { pokemon } =await params;

  let pokemonData: PokemonType | null = null;

  try {
    const API_URL = "https://pokeapi.co/api/v2";
    const response = await fetch(`${API_URL}/pokemon/${pokemon}`);
    const data = await response.json();

    pokemonData = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map(
        (item: { type: { name: string } }) => item.type.name
      ),
    };
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
    // Optionally: show fallback UI
    return <div>Failed to load Pokémon data.</div>;
  }

  // At this point, pokemonData is guaranteed to be valid
  return (
    <div className="pokemon__container">
      {pokemonData && <DisplayPokemon {...pokemonData} />}
      <Link className="pokemon__container--button" href="/types">
        Close
      </Link>
    </div>
  );
}

