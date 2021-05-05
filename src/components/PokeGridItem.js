import React, { useState } from 'react'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export const PokeGridItem = ({ pokemon, type, setPokemon }) => {

    const [pokes, setPokes] = useState({
        name: '',
        id: '',
        height: '',
        weight: '',
        image: ''
    })

    console.log(pokemon);

    if (type === 'pokemon') {
        console.log('El if');
        setPokes({
            id: pokemon.id,
            name: pokemon.name,            
            height: pokemon.height,
            weight: pokemon.weight,
            image: pokemon.sprites.front_default
        })
        setPokemon({
            data: undefined,
            typeSearch: ''
        })
    }
    else{
        setPokes({
            id: pokemon.data.id,
            name: pokemon.data.name,            
            height: pokemon.data.height,
            weight: pokemon.data.weight,
            image: pokemon.data.sprites.front_default
        })
    }

    return (
        <>
        {console.log('pokemonD'+pokes.name)}
            <Card className='poke-card'>
                <CardImg className='poke-img' top src={pokes.image} alt={pokes.name} />
                <CardBody>
                    <CardTitle tag="h5">{pokes.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{'No. Pokémon: ' + pokes.id}</CardSubtitle>
                    <CardText>
                        {'Height: ' + (pokes.height/10) + ' m'}
                        <br/>
                        {'Weight: ' + (pokes.weight/10) + ' kg'}
                    </CardText>
                    <Button className='details-button'>Details</Button>
                </CardBody>
            </Card>
        </>
    )
}