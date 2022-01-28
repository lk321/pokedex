export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          boxShadow: theme.customShadows.z12,
          borderRadius: theme.shape.borderRadiusMd,
          position: 'relative',
          zIndex: 0,
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },
  };
}
