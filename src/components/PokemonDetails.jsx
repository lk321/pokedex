import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CircularProgress,
} from '@mui/material';
import fetcher from 'utils/fetcher';

function PokemonDetails() {
  const [dataPokemon, setDataPokemon] = useState();
  const { id } = useParams();
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetcher(url).then(setDataPokemon);
  }, [id]);

  if (!dataPokemon) return <CircularProgress />;

  return (
    <Grid
      container
      spacing={2}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={dataPokemon.sprites.front_default}
            alt={dataPokemon.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {dataPokemon.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Peso:
              {dataPokemon.weight}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default PokemonDetails;
