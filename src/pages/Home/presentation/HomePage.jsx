import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import pokeball from 'assets/images/pokeball.svg';
import squirtle from 'assets/images/squirtle.svg';
import charizard from 'assets/images/charizard.svg';

import Conditional from 'components/Conditional';
import StoreCard from 'components/StoreCard';

import { Wrapper, PageHeader, Picture, StoreList } from './HomePageStyles';

const HomePage = ({ previousPath }) => {
  return (
    <Wrapper>
      <PageHeader>
        <div>
          <Picture>
            <img src={pokeball} alt="Ilustração pokébola" />
          </Picture>
          <h1>Bem-vindo(a) à Pokéstore!</h1>
        </div>
        <strong>Selecione a loja que deseja visitar</strong>
      </PageHeader>

      <StoreList>
        <StoreCard
          store="water"
          image={squirtle}
          title="WaterStore"
          description="Encontre pokémon aquáticos"
        />
        <StoreCard
          store="fire"
          image={charizard}
          title="FireStore"
          description="Encontre pokémon de fogo"
        />
      </StoreList>

      <Conditional when={!_.isEmpty(previousPath)}>
        <Link to={`store/${previousPath?.path}`}>
          {`Voltar para ${previousPath?.title}`}
        </Link>
      </Conditional>
    </Wrapper>
  );
};

HomePage.propTypes = {
  previousPath: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
  }),
};

HomePage.defaultProps = {
  previousPath: {},
};

export default HomePage;
