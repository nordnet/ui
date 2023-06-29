import React from 'react';
import styled from 'styled-components';
import Typography from '../../Atoms/Typography';
import NumberComponent from '../Number';
import Icon from '../../Atoms/Icon';
import Flexbox from '../../Atoms/Flexbox';
import Box from '../../Atoms/Box';
import { AllocationBarProps, StyledBarItemProps } from './AllocationBar.types';

const StyledBarItem = styled(Flexbox)<StyledBarItemProps>`
  background-color: ${(p) => p.$color(p.theme)};
  transition: 0.5s ease;
  transition-delay: 0.3s;

  border-radius: ${({ $isFirst, $isLast, theme }) => {
    if ($isFirst && $isLast) return theme.borderRadius(2);
    if ($isFirst) return `${theme.borderRadius(2)} 0 0 ${theme.borderRadius(2)}`;
    if ($isLast) return `0 ${theme.borderRadius(2)} ${theme.borderRadius(2)} 0`;
    return '0';
  }};
`;

const AllocationBar: React.FC<AllocationBarProps> = ({ allocations, height = 2 }) => (
  <Flexbox container>
    {allocations
      ?.sort((a, b) => b.weight - a.weight)
      ?.map(({ color, weight, label }, index) => {
        return (
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
              <StyledBarItem
                item
                height={height}
                flex={`${weight}%`}
                $color={color}
                $isFirst={index === 0}
                $isLast={allocations.length === index + 1}
              />
            </Flexbox>
          )
        );
      })}
  </Flexbox>
);

export default AllocationBar;
