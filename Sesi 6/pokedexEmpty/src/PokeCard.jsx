import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from './components/Carousel';
import Types from './components/Types';
import Abilities from './components/Abilities';
import StatsTable from './components/StatsTable';
import {PRIMARY_TYPE_CLASSNAMES} from "./utils/theme"
import {SECONDARY_TYPE_CLASSNAMES} from "./utils/theme"
import { getEnglishAbilityShortEffect } from './utils/pokeApi';

export default function PokeCard() {

  

  return (
    <Card className={     }>
      <h3 className="pokemon-card-number">No. {     }</h3>
      <Carousel 
      -
      -
      -
      />
      <Card.Body>
        <Card.Title className="pokemon-card-title">
          -
        </Card.Title>
        <Card.Text as="div" className="pokemon-types-row">
          <Types
            -
          />
        </Card.Text>
        <Card.Text as="div" className="mb-0">
          <Abilities
            -
            -
          />
        </Card.Text>
      </Card.Body>
      <StatsTable
        -
        -
      />
    </Card>
  );
}
