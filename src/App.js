import React, { useState } from 'react'
import './App.css';
import { AddCategory } from './components/AddCategory';
import { CardGrid } from './components/CardGrid';

function App() {

  const [categories, setCategories] = useState([]);

  return (
    <>
      <AddCategory setCategories={setCategories} />
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
      </ol>

    </>
  );
}

export default App;
