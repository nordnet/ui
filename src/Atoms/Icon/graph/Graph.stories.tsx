import React from 'react';
import styled from 'styled-components';
import Icon from '.';
import { Flexbox, LabeledValue, Typography } from '../../..';

const StyledLabeledValue = styled(LabeledValue)`
  align-items: center;
  margin: 12px 0;
  width: 90px;
`;

export default {
  title: 'Atoms / Icon / Category / Graph',
};

const SizeIcons = (size: string) => (
  <Flexbox container gap={8} wrap="wrap">
    {Object?.entries(Icon)
      ?.filter((name) => name[0].includes(size))
      .map(([iconName, IconComponent]: [string, React.ComponentType<any>], index) => (
        <StyledLabeledValue
          key={iconName}
          label={<Typography type="tertiary">{iconName}</Typography>}
        >
          <IconComponent title={index + 1} />
        </StyledLabeledValue>
      ))}
  </Flexbox>
);

export const size8 = {
  render: () => <>{SizeIcons('8')}</>,
  name: '8px',
};

export const size16 = {
  render: () => <>{SizeIcons('16')}</>,
  name: '16px',
};

export const size24 = {
  render: () => <>{SizeIcons('24')}</>,
  name: '24px',
};

export const size32 = {
  render: () => <>{SizeIcons('32')}</>,
  name: '32px',
};
