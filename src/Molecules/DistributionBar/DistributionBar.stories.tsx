import React from 'react';
import { DistributionBar } from './DistributionBar';
import FlexTable from '../FlexTable';
import { Flexbox, Typography } from '../../index';

export default {
  title: 'Molecules / DistributionBar',
};

const Default = () => (
  <DistributionBar
    maxWeight={100}
    bar={{
      name: 'Instrument name 1',
      weight: 100,
    }}
  />
);

const WithPercentage = () => (
  <DistributionBar
    maxWeight={100}
    numberProps={{ percentage: true }}
    bar={{
      name: 'Instrument name 1',
      weight: 10,
    }}
  />
);

const WithCurrencyAndDecimals = () => (
  <DistributionBar
    maxWeight={10}
    numberProps={{ currency: 'SEK', decimals: 3 }}
    bar={{
      name: 'Instrument name 1',
      weight: 10,
    }}
  />
);

const WithCountry = () => (
  <DistributionBar
    maxWeight={10}
    bar={{
      name: 'Instrument name 1',
      symbol: { type: 'Country', country: 'SE' },
      weight: 10,
    }}
  />
);

const WithBullet = () => (
  <DistributionBar
    maxWeight={10}
    bar={{
      name: 'Instrument name 1',
      symbol: { type: 'Bullet' },
      weight: 10,
    }}
  />
);

const WithHiddenWeight = () => (
  <DistributionBar
    maxWeight={1000}
    hideWeight
    bar={{
      name: 'Name 999',
      symbol: { type: 'Country', country: 'SE' },
      weight: 999,
    }}
  />
);

const WithLink = () => (
  <DistributionBar
    maxWeight={10}
    bar={{
      name: 'Name 1',
      link: 'linkTo',
      symbol: { type: 'Country', country: 'NO' },
      weight: 10,
    }}
    numberProps={{ currency: 'SEK' }}
  />
);

const WithTruncatedName = () => (
  <DistributionBar
    maxWeight={10}
    bar={{
      name: 'Looooooooooooooooooooooooooong naaaaaaaaaaaaaaaaaaaaaaaaaame',
      link: 'linkto',
      symbol: { type: 'Country', country: 'NO' },
      weight: 10,
    }}
  />
);

const WithMultipleBars = () => {
  const instrumentList = [
    { name: 'Name 1000', link: 'linkto', symbol: { type: 'Country', country: 'SE' }, weight: 1000 },
    { name: 'Name 999', link: 'linkto', symbol: { type: 'Country', country: 'SE' }, weight: 999 },
    { name: 'Name 500', link: 'linkto', symbol: { type: 'Country', country: 'SE' }, weight: 500 },
  ];
  const maxWeight = Math.max(...instrumentList.map((instrument) => instrument.weight));

  return (
    <Flexbox container gap={1} direction="column">
      {instrumentList.map((instrument) => (
        <DistributionBar maxWeight={maxWeight} bar={instrument} numberProps={{ currency: 'SEK' }} />
      ))}
    </Flexbox>
  );
};

const InTable = () => {
  const instrumentList = [
    {
      name: 'Unity Software Inc',
      link: 'linkto',
      symbol: { type: 'Country', country: 'US' },
      weight: 100,
      gav: { value: 99.18, currency: 'USD' },
    },
    {
      name: 'Volvo B',
      link: 'linkto',
      symbol: { type: 'Country', country: 'SE' },
      weight: 70,
      gav: { value: 132, currency: 'SEK' },
    },
    {
      name: 'King',
      link: 'linkto',
      symbol: { type: 'Country', country: 'NO' },
      weight: 55,
      gav: { value: 76, currency: 'NOK' },
    },
  ];
  const maxWeight = Math.max(...instrumentList.map((instrument) => instrument.weight));

  return (
    <FlexTable fontSize="s">
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column_stocks">Stocks</FlexTable.Header>
        <FlexTable.Header columnId="column_weight" justifyContent="flex-end" flex="0 100px">
          Weight
        </FlexTable.Header>
        <FlexTable.Header columnId="column_gav" justifyContent="flex-end" flex="0 150px">
          GAV
        </FlexTable.Header>
      </FlexTable.HeaderRow>

      {instrumentList.map((instrument) => {
        return (
          <FlexTable.Row>
            <FlexTable.Cell columnId="column_stocks">
              <DistributionBar maxWeight={maxWeight} hideWeight bar={instrument} />
            </FlexTable.Cell>
            <FlexTable.Cell columnId="column_weight" justifyContent="flex-end" flex="0 100px">
              <Typography type="tertiary">{instrument.weight}</Typography>
            </FlexTable.Cell>
            <FlexTable.Cell columnId="colum_gav" justifyContent="flex-end" flex="0 150px">
              <FlexTable.Cell.TextWrapper
                truncate
              >{`${instrument.gav.value} ${instrument.gav.currency}`}</FlexTable.Cell.TextWrapper>
            </FlexTable.Cell>
          </FlexTable.Row>
        );
      })}
    </FlexTable>
  );
};

export const showcase = () => (
  <>
    <Flexbox container gap={3} direction="column">
      <Flexbox item>
        <Typography>Default</Typography>
        <Default />
      </Flexbox>

      <Flexbox item>
        <Typography>With percentage</Typography>
        <WithPercentage />
      </Flexbox>

      <Flexbox item>
        <Typography>With currency and decimals</Typography>
        <WithCurrencyAndDecimals />
      </Flexbox>

      <Flexbox item>
        <Typography>With country</Typography>
        <WithCountry />
      </Flexbox>

      <Flexbox item>
        <Typography>With bullet</Typography>
        <WithBullet />
      </Flexbox>

      <Flexbox item>
        <Typography>With hidden weight</Typography>
        <WithHiddenWeight />
      </Flexbox>

      <Flexbox item>
        <Typography>With link</Typography>
        <WithLink />
      </Flexbox>

      <Flexbox item>
        <Typography>With truncated name</Typography>
        <WithTruncatedName />
      </Flexbox>

      <Flexbox item>
        <Typography>With multiple bars</Typography>
        <WithMultipleBars />
      </Flexbox>

      <Flexbox item>
        <Typography>In table</Typography>
        <InTable />
      </Flexbox>
    </Flexbox>
  </>
);
