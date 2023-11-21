import React from 'react';
import styled from 'styled-components';
import { Props } from './Display.types';
import { Box, Typography } from '../..';

const StyledFlexDiv = styled.div<{
  direction: 'column' | 'row';
  margin?: number;
  addBorder: boolean;
}>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: ${(p) => p.direction};

  & > * {
    padding: ${(p) => p.theme.spacing.unit(p.margin || 0)}px;
    width: 100%;
    box-sizing: border-box;
  }

  border: ${(p) => (p.addBorder ? `1px solid #eee` : `0px`)};
`;
const Flex: React.FC<any> = ({ direction, margin, children, addBorder }) => (
  <StyledFlexDiv {...{ direction, margin, children, addBorder }} />
);

const DivWithBorder = styled.div<{ horizontal?: boolean }>`
  ${(p) => (p.horizontal ? `border-bottom: 1px solid #eee` : `border-right: 1px solid #eee`)};
  align-self: center;
`;
export const Display: React.FC<Props> = ({ items, horizontal, title: displayTitle }) => (
  <>
    {displayTitle && (
      <Box mb={4}>
        <Typography type="title1">{displayTitle}</Typography>
      </Box>
    )}
    <Flex direction={horizontal ? 'row' : 'column'}>
      {items?.map(({ title, component }) => (
        <Flex direction={horizontal ? 'column' : 'row'} margin={5} key={`${title}`} addBorder>
          <DivWithBorder horizontal={horizontal}>
            <Typography>{title}</Typography>
          </DivWithBorder>
          <div>{component}</div>
        </Flex>
      ))}
    </Flex>
    {displayTitle && <Box mb={8} />}
  </>
);
