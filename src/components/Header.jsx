import {
  Stack,
  Typography,
} from '@mui/material';

import CustomSwitch from 'components/CustomSwitch';

function Header() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      <Typography variant="h2">Pokédex</Typography>
      <CustomSwitch />
    </Stack>
  );
}

export default Header;
