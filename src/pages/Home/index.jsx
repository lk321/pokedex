import useSWR from 'swr';
import { CircularProgress } from '@mui/material';
import Home from './Home';

const fetcher = (url) => fetch(url).then((r) => r.json());

function index() {
  const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon?limit=100', fetcher, { dedupingInterval: 0 });

  if (!data && error) return <CircularProgress />;

  return (
    <Home
      data={data?.results}
    />
  );
}

export default index;
