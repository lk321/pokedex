import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid,
  Stack,
  Avatar,
  Chip,
  Typography,
  CircularProgress,
  Card,
} from '@mui/material';
import fetcher from 'utils/fetcher';

import { TYPES } from 'utils/constants';

function Pokemon() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetcher(url).then(setData);
  }, [id]);

  if (!data) return <CircularProgress />;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          alt={data.name}
          src={data.sprites.front_default}
          sx={{
            height: 165,
            width: 165,
            borderWidth: 5,
            borderColor: 'error.main',
            borderStyle: 'solid',
          }}
        />
        <Typography variant="h4" sx={{ color: 'text.primary' }}>
          {data.name}
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.primary' }}>
          #
          {(`00${data.id}`).slice(-3)}
        </Typography>
        <Stack
          spacing={1}
          direction="row"
        >
          {data.types.map(({ slot, type }) => (
            <Chip
              key={slot}
              label={type.name}
              variant="outlined"
              sx={{ color: TYPES[type.name], borderColor: TYPES[type.name] }}
            />
          ))}
        </Stack>
        <Grid>
          <Card
            sx={{
              p: 6,
              borderRadius: 6,
              boxShadow: 'none',
              borderWidth: 1,
              borderColor: 'border.light',
              borderStyle: 'solid',
            }}
          >
            <Typography variant="h6" sx={{ color: 'text.primary' }}>Detalles</Typography>
          </Card>
        </Grid>
      </Stack>
    </Grid>
  );
}

export default Pokemon;
