import React from 'react';
import styled from 'styled-components';
import { Icon, Input, units } from '../../..';
import { Props } from './Search.types';

const Wrapper = styled.div`
  padding: ${units(1)}px 0;
`;

export function Search(props: Props) {
  return (
    <Wrapper>
      <Input.Text hideLabel leftAddon={<Icon.Search16 />} {...props} />
    </Wrapper>
  );
}
