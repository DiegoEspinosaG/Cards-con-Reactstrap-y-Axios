import React, { useState } from 'react'
import './App.css';
import { AddCategory } from './components/AddCategory';
import { PokeGridItem } from './components/PokeGridItem';

function App() {

  //const [categories, setCategories] = useState('');
  const [pokemon, setPokemon] = useState({
    data: [],
    typeSearch: ''
  })

  return (

    <>

      <AddCategory /* setCategories={setCategories} */ setPokemon={setPokemon} />      

      <div className='card-container'>

      {console.log('prepoke '+pokemon.data.name)}

        {          
          pokemon.data.name !== undefined ? (
            
              pokemon.typeSearch === 'pokemon' ? (
                <PokeGridItem pokemon={pokemon.data} type='pokemon' setPokemon={setPokemon}/>                
              ): (
                /* pokemon.data.map(poke => (
                  <PokeGridItem pokemon={poke} type='type'/>
                )) */'AAaaahhh'
              )
            
          ): ('')
        }        

        {/* <AddCategory setCategories={setCategories} />
  <hr />

  <ol>
    {
      categories.map(category => (
        <CardGrid
          key={category}
          category={category}
        />
      ))
    }
  </ol> */}

      </div>

    </>

  );
}

export default App;
