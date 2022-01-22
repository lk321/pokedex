import {
  CircularProgress,
  Container,
  Typography,
} from '@mui/material';
import useSWR from 'swr';

import PokeCard from 'components/PokeCard';

const fetcher = (url) => fetch(url).then((r) => r.json());

function HomePage() {
  const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon?limit=100', fetcher, { dedupingInterval: 0 });

  if (!data && error) return <CircularProgress />;

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
