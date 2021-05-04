import React from 'react'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export const PokeGridItem = ({ pokemon }) => {

    return (
        <>
            <Card className='poke-card'>
                <CardImg className='poke-img' top src={pokemon.sprites.front_default} alt={pokemon.name} />
                <CardBody>
                    <CardTitle tag="h5">{pokemon.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{'No. Pokémon: ' + pokemon.id}</CardSubtitle>
                    <CardText>
                        {'Height: ' + (pokemon.height/10) + ' m'}
                        <br/>
                        {'Weight: ' + (pokemon.weight/10) + ' kg'}
                    </CardText>
                    <Button className='details-button'>Details</Button>
                </CardBody>
            </Card>
        </>
    )
}