import { Grid, CircularProgress, Button } from '@mui/material';

import useSWRInfinite from 'swr/infinite';

import PokeCard from 'components/PokeCard';
import fetcher from 'utils/fetcher';

const PAGE_SIZE = 12;
const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;

  const offset = pageIndex * PAGE_SIZE;

  return `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_SIZE}&offset=${offset}`;
};

function PokeList() {
  const {
    data,
    error,
    size,
    setSize,
  } = useSWRInfinite(getKey, fetcher, { dedupingInterval: 0 });

  if (!data && error) return <CircularProgress />;

  return (
    <Grid
      container
      spacing={2}
    >
      <Button onClick={() => setSize(size + 1)}>Load more</Button>
      {
        data?.flat().map(({ name, url }) => (
          <Grid key={name} item xs={6} sm={3} md={2}>
            <PokeCard
              name={name.toLocaleLowerCase()}
              url={url}
            />
          </Grid>
        ))
      }
    </Grid>
  );
}

export default PokeList;
