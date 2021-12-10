const API_KEY = '4bb785fcd7c7a8a200a9be11d96acb18';
const BASE_URL = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint, ...moreEndpoint) => {
let response = await fetch(`${BASE_URL}/${endpoint}?api_key=${API_KEY}&${moreEndpoint}`);
let data = response.json();
return data;
}

const GetHomeList = async () => {
  return [
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch('discover/movie', 'with_genres=28&language=pt-BR')
    },

    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch('discover/movie', 'with_genres=28&language=pt-BR')
    },

    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch('discover/movie', 'with_genres=28&language=pt-BR')
    },

    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch('discover/movie', 'with_genres=28&language=pt-BR')
    },
    
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch('discover/movie', 'with_genres=28&language=pt-BR')
    },

    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch('discover/movie', 'with_genres=28&language=pt-BR')
    }
  ]
}

export default GetHomeList;
