import { useNavigate } from 'react-router-dom';
import {
  Stack,
  Typography,
} from '@mui/material';
import CustomSwitch from 'components/CustomSwitch';

function Header() {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      marginBottom={2}
    >
      <Typography
        variant="h2"
        sx={{
          color: 'text.primary',
          cursor: 'pointer',
        }}
        onClick={() => navigate(-1)}
      >
        Pokédex
      </Typography>
      <CustomSwitch />
    </Stack>
  );
}

export default Header;
