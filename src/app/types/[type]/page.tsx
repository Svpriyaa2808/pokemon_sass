import '../../types/types.scss'

interface PokemonType {
    pokemon: {
    name : string,
    url:string
    }
}

type PageProps = Promise<{ type: string }>;

let data: PokemonType[];

export default async function TypePage  ({params}: {params:PageProps} ) {
    const { type } = await params;
    

    try {
        const response = await fetch (`https://pokeapi.co/api/v2/type/${type}`);
        const jsonData= await response.json();
        data = jsonData.pokemon;
        console.log(data)
        console.log(data[0].pokemon.url)
    } catch (error) {
        console.log(error)
    }

    return (
        <div className="pokemon__content">
            <h1 className={`pokemon__content--${type}`}>{type} type pokemon</h1>
            <div className='pokemon__types'>
            {data.map((item: PokemonType,index:number)=> <a href={`/pokemon/${item.pokemon.name}`} key={index} className={`pokemon__content--${type}`}>{item.pokemon.name}</a>)}
        </div>
        </div>
    )
}

