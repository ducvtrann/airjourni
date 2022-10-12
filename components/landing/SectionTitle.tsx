// Package
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

// Interface
export interface ISectionTitle {
  title: string;
  subTitle: string;
}

// Main
const SectionTitle: React.FC<ISectionTitle> = ({ title, subTitle }) => {
  return (
    <Box
      sx={{
        p: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: 24,
          color: 'secondary.main',
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: 18,
          color: 'text.secondary',
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
