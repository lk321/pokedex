import {
  Container,
  Typography,
} from '@mui/material';

import PokeCard from 'components/PokeCard';

function HomePage() {
  return (
    <Container>
      <Typography variant="h2">Pokédex</Typography>
      <PokeCard
        name="Pikachu"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
      />
    </Container>
  );
}

export default HomePage;
