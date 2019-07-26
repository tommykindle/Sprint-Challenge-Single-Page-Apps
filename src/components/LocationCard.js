import React from 'react'
import { Card, Icon, } from 'semantic-ui-react'


const LocationCard = ({ location }) => {

  return (
    <Card
      link
      header={location.name}
      meta={location.type}
      description={location.dimension} />
  )
}

export default LocationCard;
