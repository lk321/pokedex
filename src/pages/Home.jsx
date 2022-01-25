import {
  Container,
} from '@mui/material';
import PokeList from 'components/PokeList';
import Header from 'components/Header';

function HomePage() {
  return (
    <Container>
      <Header />
      <PokeList />
    </Container>
  );
}

export default HomePage;
