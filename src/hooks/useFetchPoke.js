import { useState, useEffect } from 'react'
import { getPokemons } from '../helpers/getPokemons';

export const useFetchPoke = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getPokemons( category )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])




    return state; // { data:[], loading: true };

}
