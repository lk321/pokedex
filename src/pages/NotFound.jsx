import React from 'react';
import {
  Container,
  Stack,
} from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import notFoundImages from '../assets/notFound.jpg';

function NotFound() {
  return (
    <Container sx={{ color: 'text.primary' }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Stack>
          <img
            src={notFoundImages}
            alt=" "
            style={{ width: 400, height: 400 }}
          />
        </Stack>
        <h1>
          <CatchingPokemonIcon />
          Eror 404 Not Found
          <CatchingPokemonIcon />
        </h1>
      </Stack>
    </Container>
  );
}
export default NotFound;
