import styled from 'styled-components';
import React from 'react';
import { Flexbox, Typography } from '../..';
import { Props } from './List.types';

const StyledList = styled.ul<Props>`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const TitleContainer = styled.div`
  margin-bottom: ${p => p.theme.spacing.unit(1)}px;
`;

export const List: React.FunctionComponent<Props> = ({
  as = 'ul',
  leftTitle,
  rightTitle,
  children,
}) => {
  const showTitle = leftTitle || rightTitle;

  return (
    <>
      {showTitle && (
        <TitleContainer>
          <Flexbox.Container gutter={0} justifyContent="space-between">
            <Flexbox.Item>
              <Typography type="secondary">{leftTitle}</Typography>
            </Flexbox.Item>
            <Flexbox.Item>
              <Typography type="secondary">{rightTitle}</Typography>
            </Flexbox.Item>
          </Flexbox.Container>
        </TitleContainer>
      )}
      <StyledList as={as}>{children}</StyledList>
    </>
  );
};

List.displayName = 'List';
