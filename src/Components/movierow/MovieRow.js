import React from 'react';

import './movieRow.css';

const MovieRow = ({title, items}) => {
  return(
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className='movieRow--list'>
        {
          items.results.map(result => (
            <div className='movieRow--listItem'>
              <img src={`https://image.tmdb.org/t/p/w300${result.poster_path}`} alt={result.original_name} />
            </div>

         ))
        }
      </div>
    </div>
  )
}

export default MovieRow;