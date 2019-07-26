import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard.js'



const CharacterList = props => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          setCharacters(res.data);
          console.log('Result', res);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getCharacters();
  }, []);

  return <section className='character-list grid-view'>
    <h2>
      {characters.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}
    </h2>
  </section>

}
function CharacterDetails({ character }) {
  const { name, status, species, type } = character;
  return (
    <CharacterCard carachter={character} />
  )
}

export default CharacterList;
