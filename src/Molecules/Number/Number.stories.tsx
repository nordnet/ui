import React from 'react';
import MD from 'react-markdown';
import { IntlProvider } from 'react-intl';
import { Number, Typography } from '../..';
import docs from './Number.md';
import { Display } from '../../common/Display';
import { TYPOGRAPHY_TYPES } from '../../Atoms/Typography/Typography';

export default {
  title: 'Molecules / Number',
  parameters: {
    component: Number,
  },
};

export const Documentation = () => (
  <Typography>
    <MD>{docs}</MD>
    <div>
      <Number value={1000000} />
    </div>
    <div>
      <Number value={3400} currency="SEK" />
    </div>
  </Typography>
);

export const Default = {
  render: () => (
    <Display
      items={[
        { title: 'value = 1000', component: <Number value={1000} /> },
        { title: 'value = 9000000', component: <Number value={9000000} /> },
        { title: 'value = 0.01', component: <Number value={0.01} /> },
        { title: 'value = 111.2', component: <Number value={111.2} /> },
      ]}
    />
  ),
};

export const NumberWith2Decimals = {
  render: () => {
    return (
      <Display
        items={[
          { title: 'value = 10.378', component: <Number value={10.378} decimals={2} /> },
          { title: 'value = 10.333', component: <Number value={10.333} decimals={2} /> },
          { title: 'value = 10', component: <Number value={10} decimals={2} /> },
          { title: 'value = 10.5', component: <Number value={10.5} decimals={2} /> },
        ]}
      />
    );
  },
};

export const NumberWithMinMaxDigits = {
  render: () => {
    return (
      <>
        <Number value={10.378} maximumDecimals={2} />
        <Number value={10.1} minimumDecimals={2} />
        <Number value={10.333} minimumDecimals={2} maximumDecimals={4} />
        <Number value={10.1} minimumDecimals={2} maximumDecimals={4} />
        <Number value={10.66666} minimumDecimals={2} maximumDecimals={4} />
        <Number value={10} minimumDecimals={2} maximumDecimals={4} />
      </>
    );
  },

  name: 'Number with min/max digits',
};

export const NumberTicks = {
  render: () => {
    const ticks = [
      {
        decimals: 4,
        fromPrice: 0,
        toPrice: 0.9999,
        tick: 0.0001,
      },
      {
        decimals: 2,
        fromPrice: 1,
        toPrice: 99999.98,
        tick: 0.01,
      },
      {
        decimals: 1,
        fromPrice: 100000,
        toPrice: 999999.89,
        tick: 0.1,
      },
    ];
    return (
      <>
        <pre>{`ticks = ${JSON.stringify(ticks, null, 2)}`}</pre>
        <Display
          items={[
            { title: 'value = 0.55555', component: <Number value={0.55555} ticks={ticks} /> },
            { title: 'value = 10.333', component: <Number value={10.333} ticks={ticks} /> },
            { title: 'value = 10.5', component: <Number value={10.5} ticks={ticks} /> },
            { title: 'value = 100001.22', component: <Number value={100001.22} ticks={ticks} /> },
          ]}
        />
      </>
    );
  },
};

export const NumberWithPercentage = {
  render: () => {
    return <Number value={2.3} percentage />;
  },
};

export const NumberWithCurrency = {
  render: () => {
    return <Number value={2.3} currency="SEK" />;
  },
};

export const NumberWithCurrencyAsDifferentSize = {
  render: () => {
    return (
      <>
        <Typography type="title2" as="div">
          <Number value={2.3} currency="SEK" currencySize="title3" />
        </Typography>
        {/* Should inherit boldness */}
        <Typography type="primary" weight="bold" as="div">
          <Number value={2.3} currency="SEK" currencySize="secondary" />
        </Typography>
      </>
    );
  },
};

export const NumberWithSign = {
  render: () => {
    return (
      <Display
        items={[
          { title: 'value = 2', component: <Number value={2} sign /> },
          { title: 'value = 0', component: <Number value={0} sign /> },
          { title: 'value = -1', component: <Number value={-1} sign /> },
        ]}
      />
    );
  },
};

export const InvalidValue = {
  render: () => {
    return <Number value={null} />;
  },
};

export const MaskValue = {
  render: () => {
    return (
      <Display
        items={[
          {
            title: 'maskValue',
            component: <Number value={9999} sign maskValue />,
          },
          {
            title: 'maskValue with currency',
            component: <Number value={9999} maskValue currency="SEK" />,
          },
        ]}
      />
    );
  },

  name: 'Number with masked value',
};

export const NullCurrency = {
  render: () => {
    // @ts-ignore
    return <Number value={10} currency={null} />;
  },
};

export const RegressionValueIsPositiveButRoundedValueIs0 = {
  render: () => (
    <Display
      items={[{ title: 'value = 0.1', component: <Number value={0.1} sign decimals={0} /> }]}
    />
  ),

  name: 'Regression: value is positive, but rounded value is 0',
};

export const Regression0ShouldBe0 = {
  render: () => (
    <>
      <Display
        items={[{ title: 'value = 0.1', component: <Number value={-0.1} sign decimals={0} /> }]}
      />
      <IntlProvider locale="sv-SE">
        <Display
          items={[{ title: 'value = 0.1', component: <Number value={-0.1} sign decimals={0} /> }]}
        />
      </IntlProvider>
      ,
    </>
  ),

  name: 'Regression: -0 should be 0',
};

export const IntegrationWithDifferentTypographies = {
  render: () => {
    const items = Object.values(TYPOGRAPHY_TYPES)?.map((type) => ({
      title: type,
      component: (
        <Typography type={type}>
          <Display
            items={[
              { title: 'value = 1000', component: <Number value={1000} /> },
              { title: 'value = 9000000', component: <Number value={9000000} /> },
              { title: 'value = 0.01', component: <Number value={0.01} /> },
              { title: 'value = 111.2', component: <Number value={111.2} /> },
            ]}
          />
        </Typography>
      ),
    }));
    return <Display items={items} />;
  },

  name: 'Integration: with different typographies',
};
