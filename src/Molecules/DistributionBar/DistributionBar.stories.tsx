import React from 'react';
import { DistributionBar } from './DistributionBar';

import { Flag, Flexbox, Typography, Link } from '../../index';

export default {
  title: 'Molecules / DistributionBar',
};

export const Showcase = () => (
  <>
    <Flexbox container gap={3} direction="column">
      <Flexbox item>
        <Typography>50 weight</Typography>
        <DistributionBar truncatedLabel="truncatedLabel" name="Instrument name 1" weight={50}>
          test
        </DistributionBar>
      </Flexbox>
      <Flexbox item>
        <Typography>100 weight</Typography>
        <DistributionBar
          truncatedLabel="truncatedLabel"
          name="Instrument name 1"
          weight={100}
          icon={<Flag size="m" country="SE" />}
        />
      </Flexbox>
      <Flexbox item>
        <Typography>0 weight</Typography>
        <DistributionBar
          truncatedLabel="truncatedLabel"
          name="Instrument name 1 Instrument name 1 Instrument name 1 Instrument name 1"
          weight={0}
          icon={<Flag size="m" country="SE" />}
        >
          <Flexbox container>
            <div>GAV</div>
            <div>10%</div>
            <div>Another Column</div>
          </Flexbox>
        </DistributionBar>
      </Flexbox>
      <Flexbox item>
        <Typography>Link Name</Typography>
        <DistributionBar
          truncatedLabel="truncatedLabel"
          name={
            <Link to="/" color="inherit">
              Link to something
            </Link>
          }
          weight={0}
          icon={<Flag size="m" country="SE" />}
        >
          <Flexbox container>
            <div>GAV</div>
          </Flexbox>
        </DistributionBar>
      </Flexbox>
      <Flexbox item>
        <Typography>Space children</Typography>
        <DistributionBar
          truncatedLabel="truncatedLabel"
          name="Instrument name 1"
          weight={69}
          icon={<Flag size="m" country="SE" />}
        >
          <Flexbox container width="50%" justifyContent="space-between">
            <Flexbox item>very start</Flexbox>
            <Flexbox item>very end</Flexbox>
          </Flexbox>
        </DistributionBar>
      </Flexbox>
      <Flexbox item>
        <Typography>Animation Waterfall</Typography>
        <Flexbox container direction="column" gap={2}>
          {Array.from(Array(10).keys()).map((item, i) => (
            <DistributionBar
              truncatedLabel="truncatedLabel"
              name={`Instrument name ${i + 1}`}
              weight={Math.floor(Math.random() * 101)}
              delay={0 + i / 5}
              icon={<Flag size="m" country="SE" />}
            />
          ))}
        </Flexbox>
      </Flexbox>
    </Flexbox>
  </>
);
