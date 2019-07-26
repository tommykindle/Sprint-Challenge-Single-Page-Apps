import React from 'react'
import { Card, Icon, } from 'semantic-ui-react'


const EpisodeCard = ({ episode }) => {

  return (
    <Card
      link
      header={episode.name}
      meta={episode.air_date}
      description={episode.episode} />
  )
}

export default EpisodeCard;