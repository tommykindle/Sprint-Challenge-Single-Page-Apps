import React, { useEffect, useState } from 'react';
import axios from 'axios'
import EpisodeCard from './EpisodeCard.js'

const EpisodeList = props => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    const getEpisodes = () => {
      axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
          setEpisodes(res.data.results);
          console.log('Episodes Result', res);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getEpisodes();
  }, []);

  return <section className='character-list grid-view'>
    <h2>
      {episodes.map(episodes => (
        <EpisodeDetails key={episodes.name} episodes={episodes} />
      ))}
    </h2>
  </section>

}

function EpisodeDetails({ episodes }) {
  const { name, air_date, episode } = episodes;
  return (
    <EpisodeCard episode={episodes} />

  )
}



export default EpisodeList;