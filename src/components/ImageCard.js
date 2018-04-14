import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import unknown from '../assets/img/unknown.png';

const ImageCard = () => (
  <Card className="centered middle aligned">
    <Image src={ unknown } />
    <Card.Content>
      <Card.Header>
        Your Name...
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Your username...
        </span>
      </Card.Meta>
      <Card.Description>
        Your email...
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name='bolt' />
      Your score
    </Card.Content>
  </Card>
);

export default ImageCard;
