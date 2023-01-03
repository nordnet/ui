import React from 'react';
import styled from 'styled-components';
import { ColorFn } from 'common/Types';
import Typography from '../../Atoms/Typography';
import NumberComponent from '../Number';
import Icon from '../../Atoms/Icon';
import Flexbox from '../../Atoms/Flexbox';
import Box from '../../Atoms/Box';
import { AllocationBarProps } from './AllocationBar.types';

const StyledBarItem = styled(Flexbox)<{ $color: ColorFn }>`
  background-color: ${(p) => p.$color(p.theme)};
  transition: 0.5s ease;
  transition-delay: 0.3s;
`;

const AllocationBar: React.FC<AllocationBarProps> = ({ allocations, height = 2 }) => (
  <Flexbox container>
    {allocations
      ?.sort((a, b) => b.weight - a.weight)
      ?.map(
        ({ color, weight, label }) =>
          weight > 0 && (
            <Flexbox item key={label} flex={`${weight}%`}>
              <Flexbox container alignItems="center">
                <Icon.Dot8 color={color} />
                <Box ml={2}>
                  <Flexbox item container direction="column">
                    <Typography type="secondary" weight="bold">
                      <NumberComponent value={weight} percentage />
                    </Typography>
                    <Typography type="secondary" color={(t) => t.color.label}>
                      {label}
                    </Typography>
                  </Flexbox>
                </Box>
              </Flexbox>
              <StyledBarItem item height={height} flex={`${weight}%`} $color={color} />
            </Flexbox>
          ),
      )}
  </Flexbox>
);

export default AllocationBar;
