import PropTypes from 'prop-types';

import {
  Container,
  Typography,
  Grid,
} from '@mui/material';

import PokeCard from 'components/PokeCard';

function HomePage({ data }) {
  return (
    <Container>
      <Typography variant="h2">Pokédex</Typography>
      <Grid container spacing={12} direction="row" justifyContent="flex-start" alignItems="center">
        {
          data?.map((pokemon, index) => (
            <Grid item xs={6} sm={4} md={2}>
              <PokeCard
                name={pokemon.name.toLocaleLowerCase()}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

HomePage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePage;
