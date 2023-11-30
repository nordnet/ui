import React from 'react';
import styled from 'styled-components';
import { Theme } from 'theme/theme.types';
import { IntlProvider } from 'react-intl';
import docs from './AllocationBar.mdx';
import AllocationBar from './AllocationBar';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 12px;
  box-sizing: border-box;
`;

export default {
  title: 'Molecules / Allocation Bar',
  parameters: {
    docs: {
      page: docs,
    },
    component: AllocationBar,
  },
};

export const BasicAllocationBar = {
  render: () => {
    const mockedAllocations = [
      {
        label: 'ETFs',
        color: (t: Theme) => t.color.allocationBarLightBlue,
        weight: 20,
      },
      {
        label: 'Funds',
        color: (t: Theme) => t.color.allocationBarDarkBlue,
        weight: 80,
      },
    ];

    return (
      <IntlProvider locale="en">
        <StyledContainer>
          <AllocationBar allocations={mockedAllocations} />
        </StyledContainer>
      </IntlProvider>
    );
  },

  name: 'Basic usage',
};
