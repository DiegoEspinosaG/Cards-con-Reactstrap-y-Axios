import axios from 'axios';

export const getPokemons = async( category ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${ encodeURI( category ) }`;
    axios.get( url )
        .then(resp => {
            const pokes = resp.data;
            console.log(pokes);

            const pokemons = await pokes.map( img => {
                return {
                    id: img.id,
                    name: img.name,
                    image: img.sprites.front_default,
                }
            })
        
            return pokemons;
        })


    //const { data } = await resp.json();

    


}

/* export const getPokemons = async( category ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${ encodeURI( category ) }`;
    console.log(url);
    const resp = await fetch( url );
    const { data } = await resp.json();

    console.log({data});

    const pokemons = data.map( img => {
        return {
            id: img.id,
            name: img.name,
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
        }
    })

    return pokemons;


} */