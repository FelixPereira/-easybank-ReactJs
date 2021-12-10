import React, { useState, useEffect } from 'react';
import GetHomeList from './tmdb/TMDB';


const App = () => {
  useEffect(() => {
    const loadLists = async () => {
      const lists = await GetHomeList();
     console.log(lists)
     lists.map(list => (
      console.log(list.items.results[2])
    ))
    }
    loadLists();
  }, []);

  return(
    <h2>hello</h2>
  )
}

export default App;