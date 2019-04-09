import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import LabeledValue from './index';
import Currency from '../../Atoms/Currency';
import Typography from '../../Atoms/Typography';
import Development from '../../Atoms/Development';

const StyledChildsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledDevContainer = styled.div`
  margin-right: 8px;
`;

storiesOf('Molecules | LabeledValue', module)
  .add('LabeledValue secondary currency', () => (
    <LabeledValue label="Market value">
      <Currency.Secondary value={4672198} currency="SEK" weight="bold" />
    </LabeledValue>
  ))
  .add('LabeledValue title1', () => (
    <LabeledValue label="Holdings (SEK)">
      <Typography type="title1">4713119</Typography>
    </LabeledValue>
  ))
  .add('LabeledValue with positive development and currency', () => (
    <LabeledValue label="Development this year">
      <StyledChildsContainer>
        <StyledDevContainer>
          <Development.Secondary value={9.2} />
        </StyledDevContainer>
        <Currency.Secondary sign value={4672198} currency="SEK" weight="bold" />
      </StyledChildsContainer>
    </LabeledValue>
  ))
  .add('LabeledValue with negative development and currency', () => (
    <LabeledValue label="Development this year">
      <StyledChildsContainer>
        <StyledDevContainer>
          <Development.Secondary value={-9.2} />
        </StyledDevContainer>
        <Currency.Secondary sign value={-4672198} currency="SEK" weight="bold" />
      </StyledChildsContainer>
    </LabeledValue>
  ));
