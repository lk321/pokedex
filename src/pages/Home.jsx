import {
  Container,
  Typography,
} from '@mui/material';

import PokeList from 'components/PokeList';

function HomePage() {
  return (
    <Container>
      <Typography variant="h2">Pokédex</Typography>
      <PokeList />
    </Container>
  );
}

export default HomePage;
