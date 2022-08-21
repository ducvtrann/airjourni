import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

interface Layout {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Root = (props: Layout) => (
  <Box
    {...props}
    sx={[
      {
        bgcolor: 'background.paper',
        display: 'grid',
        gridTemplateColumns: {
          md: 'minmax(268px, 450px) minmax(500px, 1fr)',
          lg: '500px 1fr',
        },
        gridTemplateRows: '64px 1fr',
        minHeight: '100vh',
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

const Header = (props: Layout) => (
  <Box
    component="header"
    className="Header"
    {...props}
    sx={[
      {
        p: 2,
        gap: 2,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gridColumn: '1 / -1',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

const SidePane = (props: Layout) => (
  <Box
    component="section"
    className="Trip"
    {...props}
    sx={[
      {
        bgcolor: 'background.componentBg',
        borderRight: '1px solid',
        borderColor: 'divider',
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

const Main = (props: Layout) => (
  <Box
    component="section"
    className="Main"
    {...props}
    sx={[{ p: 2 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
  />
);

const Layout = {
  Root,
  Header,
  SidePane,
  Main,
};

export default Layout;
