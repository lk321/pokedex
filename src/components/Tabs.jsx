import * as React from 'react';
import { Tabs, Tab } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import CastleIcon from '@mui/icons-material/Castle';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function tabsIcons() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      sx={{ position: 'fixed', bottom: '0', width: '100%' }}
    >
      <Tab icon={<CatchingPokemonIcon />} iconPosition="top" label="Captured" />
      <Tab icon={<CastleIcon />} iconPosition="top" label="General" />
      <Tab icon={<FavoriteIcon />} iconPosition="top" label="Favorites" />
    </Tabs>
  );
}
