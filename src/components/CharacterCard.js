import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const CharacterCard = ({ character }) => {
  return (
    <Card>
      <Image src={character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>{`Location: ${character.origin.name}`}</Card.Meta>
        <Card.Description>
          {`${character.name} is ${character.species} Status: ${character.status}`}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='video camera' />
          Episodes
      </a>
      </Card.Content>
    </Card>
  )
}

export default CharacterCard;
