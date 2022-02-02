import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid,
  Stack,
  Avatar,
  Chip,
  Typography,
  CircularProgress,
} from '@mui/material';

import {
  FlagTwoTone as FlagTwoToneIcon,
  HeightTwoTone as HeightTwoToneIcon,
  FitnessCenterTwoTone as FitnessCenterTwoToneIcon,
} from '@mui/icons-material';

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

  const [{ type: principalType }] = data.types;

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Avatar
          alt={data.name}
          src={data.sprites.front_default}
          sx={{
            height: 180,
            width: 180,
            borderWidth: 5,
            borderColor: TYPES[principalType.name],
            borderStyle: 'solid',
          }}
        />
        <Typography variant="h4" sx={{ color: 'text.primary' }}>
          {data.name}
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.primary' }}>
          #
          {`00${data.id}`.slice(-3)}
        </Typography>
        <Stack spacing={1} direction="row">
          {data.types.map(({ slot, type }) => (
            <Chip
              key={slot}
              label={type.name}
              variant="outlined"
              sx={{
                color: TYPES[type.name],
                borderColor: TYPES[type.name],
              }}
            />
          ))}
        </Stack>
        <Grid
          sx={{
            p: 6,
            color: 'text.primary',
            borderRadius: 6,
            backgroundColor: 'background.neutral',
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={6}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={0.5}
            >
              <HeightTwoToneIcon />
              <Typography variant="inherit" component="b">Heigth</Typography>
              <Typography variant="caption">
                {data.height}
                m
              </Typography>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={0.5}
            >
              <FitnessCenterTwoToneIcon />
              <Typography variant="inherit" component="b">Weight</Typography>
              <Typography variant="caption">
                {data.weight}
                kg
              </Typography>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={0.5}
            >
              <FlagTwoToneIcon />
              <Typography variant="inherit" component="b">Abilities</Typography>
              <Typography variant="caption">
                {data.abilities.map(({ ability }) => ability.name).join(', ')}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Stack>
    </Grid>
  );
}

export default Pokemon;
