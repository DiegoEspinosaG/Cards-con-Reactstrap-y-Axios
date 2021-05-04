import React, { useState } from 'react'
import './App.css';
import { AddCategory } from './components/AddCategory';
import { PokeGridItem } from './components/PokeGridItem';

function App() {

  //const [categories, setCategories] = useState('');
  const [pokemon, setPokemon] = useState({
    data: [],
  })

  return (

    <>

      <AddCategory /* setCategories={setCategories} */ setPokemon={setPokemon} />      

      <div className='card-container'>

        {
          pokemon.name !== undefined ? (
            
              <PokeGridItem pokemon={pokemon} />            
            
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
