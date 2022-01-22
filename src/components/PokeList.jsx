import { Grid, CircularProgress } from '@mui/material';

import useSWRInfinite from 'swr/infinite';

import PokeCard from 'components/PokeCard';
import fetcher from 'utils/fetcher';
import useLazyLoad from 'hooks/useLazyLoad';

const PAGE_SIZE = 25;
const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;

  const offset = pageIndex * PAGE_SIZE;

  return `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_SIZE}&offset=${offset}`;
};

function PokeList() {
  const {
    data,
    error,
    setSize,
  } = useSWRInfinite(getKey, fetcher);

  if (!data && error) return <CircularProgress />;

  const handleCatchMorePokemon = () => {
    setSize((size) => size + 1);
  };

  const { fromRef } = useLazyLoad({ onLoad: handleCatchMorePokemon });

  const pokemons = data?.flat() ?? [];

  return (
    <Grid
      container
      spacing={2}
    >
      {
        pokemons.map(({ name, url }) => (
          <Grid
            item
            key={name}
            xs={12}
            sm={6}
            md={4}
            xl={2}
          >
            <PokeCard
              name={name.toLocaleLowerCase()}
              url={url}
            />
          </Grid>
        ))
      }
      <div ref={fromRef} />
    </Grid>
  );
}

export default PokeList;
