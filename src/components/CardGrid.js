import React from 'react'
import { useFetchPoke } from '../hooks/useFetchPoke';
import { PokeGridItem } from './PokeGridItem';

export const CardGrid = ({ category }) => {

    const { data:images, loading } = useFetchPoke( category );

    return (
        <>
            <h3 /* className="animate__animated animate__fadeIn" */> Resultados de: { category } </h3>

            {/* { loading && <p className="animate__animated animate__flash">Loading</p> } */}

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <PokeGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </>
    )

}
