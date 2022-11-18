import React from 'react';
import styled from 'styled-components';
import docs from './AllocationBar.mdx';
import AllocationBar from './AllocationBar';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 12px;
  box-sizing: border-box;
  background-color: #e6e6e6;
`;

const mockedAllocations = [
  {
    label: 'ETFs',
    color: '#6690FF',
    weight: 18,
  },
  {
    label: 'Funds',
    color: '#1F4099',
    weight: 80,
  },
  {
    label: 'Shares',
    color: '#009195',
    weight: 2,
  },
];

export default {
  title: 'Molecules / Allocation Bar',
  parameters: {
    docs: {
      page: docs,
    },
    component: AllocationBar,
  },
};

export const basicAllocationBar = () => (
  <StyledContainer>
    <AllocationBar allocations={mockedAllocations} />
  </StyledContainer>
);

basicAllocationBar.story = {
  name: 'Basic usage',
};
