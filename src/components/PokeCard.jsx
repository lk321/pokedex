import { memo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

function PokeCard({ name, url }) {
  const navigate = useNavigate();
  const pokemonId = url.split('/')[url.split('/').length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  const goToPokemon = () => navigate(`/pokemon/${pokemonId}`);

  return (
    <Card>
      <CardMedia
        alt="green iguana"
        component="img"
        loading="lazy"
        height="140"
        src={imageUrl}
        sx={{
          objectFit: 'contain',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={goToPokemon}
        >
          Gotcha
        </Button>
      </CardActions>
    </Card>
  );
}

PokeCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default memo(PokeCard, (prevProps, nextProps) => prevProps.name === nextProps.name);
