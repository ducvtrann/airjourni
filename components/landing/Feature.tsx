// Package
import Image from 'next/image';
import { Stack, Box, Typography } from '@mui/material';
import { features } from '../../lib/static/features';

// Component
import SectionTitle from './SectionTitle';

// Interface
export interface IBenefitItem {
  title: string;
  desc: string;
  icon: JSX.Element;
}

// Main
const Feature: React.FC = () => {
  return (
    <>
      <SectionTitle
        title="Features"
        subTitle="Everything you would want on one platform"
      />
      {features.map((feature, index) => (
        <Stack
          id="features"
          key={index}
          direction={
            feature.isImageFirst
              ? { xs: 'column', lg: 'row' }
              : { xs: 'column', lg: 'row-reverse' }
          }
          spacing={{ xs: 2, lg: 4 }}
          sx={{ mb: 4, p: 3 }}
        >
          <Box
            sx={{
              flex: { sm: '100%', lg: '50%' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={feature.image}
              width="521"
              height="482"
              alt="Benefits"
              layout="intrinsic"
            />
          </Box>
          <Box
            sx={{
              flex: { sm: '100%', lg: '50%' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    color: { xs: 'text.primary' },
                    fontSize: { xs: 20, xl: 24 },
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    color: { xs: 'text.secondary' },
                    fontSize: { xs: 16, xl: 20 },
                  }}
                >
                  {feature.desc}
                </Typography>
              </Box>
              <Box>
                {feature.bullets.map((item, index) => (
                  <BenefitItem key={index} {...item}></BenefitItem>
                ))}
              </Box>
            </Box>
          </Box>
        </Stack>
      ))}
    </>
  );
};

const BenefitItem: React.FC<IBenefitItem> = ({ title, desc, icon }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      {icon}
      <Stack>
        <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>{desc}</Typography>
      </Stack>
    </Stack>
  );
};

export default Feature;
