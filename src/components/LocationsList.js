import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LocationCard from './LocationCard.js'


const LocationsList = props => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const getLocations = () => {
      axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(res => {
          setLocations(res.data.results);
          console.log('Location Result', res);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getLocations();
  }, []);

  return <section className='character-list grid-view'>
    <h2>
      {locations.map(location => (
        <LocationDetails key={location.name} location={location} />
      ))}
    </h2>
  </section>
}
function LocationDetails({ location }) {
  const { name, type, dimension } = location;
  return (
    <LocationCard location={location} />

  )
}


export default LocationsList;
