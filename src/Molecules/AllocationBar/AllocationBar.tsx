import React from 'react';
import styled from 'styled-components';
import Typography from '../../Atoms/Typography';
import NumberComponent from '../Number';
import Icon from '../../Atoms/Icon';
import Flexbox from '../../Atoms/Flexbox';
import Box from '../../Atoms/Box';
import { AllocationBarProps } from './AllocationBar.types';

const StyledBarItem = styled(Flexbox)<{ $color: string }>`
  background-color: ${(p) => p.$color};
  transition: 0.5s ease;
  transition-delay: 0.3s;
`;

const StyledDotIcon = styled(Icon.Dot8)<{ $color: string }>`
  color: ${(p) => p.$color};
`;

const AllocationBar: React.FC<AllocationBarProps> = ({ allocations }) => (
  <Flexbox container>
    {allocations
      ?.sort((a, b) => b.weight - a.weight)
      .map(
        (allocation) =>
          allocation.weight > 0 && (
            <Flexbox item flex={`${allocation.weight}%`}>
              <Flexbox container alignItems="center">
                <StyledDotIcon $color={allocation.color} />
                <Box ml={2}>
                  <Flexbox item container direction="column">
                    <Typography type="secondary" weight="bold">
                      <NumberComponent value={allocation.weight} percentage />
                    </Typography>
                    <Typography type="secondary" color={(t) => t.color.label}>
                      {allocation.label}
                    </Typography>
                  </Flexbox>
                </Box>
              </Flexbox>
              <StyledBarItem
                item
                height={2}
                flex={`${allocation.weight}%`}
                $color={allocation.color}
              />
            </Flexbox>
          ),
      )}
  </Flexbox>
);

export default AllocationBar;
