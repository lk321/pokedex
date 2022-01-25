import {
  Container,
  Typography,
} from '@mui/material';
import PokeList from 'components/PokeList';
import CustomSwitch from 'components/CustomSwitch';

function HomePage() {
  return (
    <Container>
      <CustomSwitch />
      <Typography variant="h2">Pokédex with SWR</Typography>
      <PokeList />
    </Container>
  );
}

export default HomePage;
