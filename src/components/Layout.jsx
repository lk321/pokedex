import { Outlet } from 'react-router-dom';
import {
  Container,
} from '@mui/material';
import Header from 'components/Header';

function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Layout;
