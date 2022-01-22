export default function Card() {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          boxShadow: 'none',
          borderRadius: '8px',
          border: '1px solid #e0e0e0',
          backgroundColor: '#fff',
          '&:hover': {
            boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          },
        },
      },
    },
  };
}
