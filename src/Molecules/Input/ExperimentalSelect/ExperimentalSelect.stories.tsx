import React from 'react';
import { useState } from '@storybook/addons';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Display } from '../../../common/Display';
import { ExperimentalSelect } from './ExperimentalSelect';
import { Props } from './ExperimentalSelect.types';

export default {
  title: 'Molecules / Input / ExperimentalSelect',
  component: ExperimentalSelect,
  args: {
    width: '200px',
  },
};

export const DefaultAndCommonUseCases = () => {
  return (
    <Display
      items={[
        {
          title: 'Default use',
          component: (
            <ExperimentalSelect
              selectedValue="world"
              options={[
                { label: 'heloo', value: 'world' },
                { label: 'goodbye', value: 'mars' },
              ]}
              onChange={action('Selected value: ')}
            />
          ),
        },
        {
          title: 'Default use - small',
          component: (
            <ExperimentalSelect
              selectedValue="world"
              options={[{ label: 'heloo', value: 'world' }]}
              size="s"
              onChange={action('Selected value: ')}
            />
          ),
        },
        {
          title: 'Disabled',
          component: (
            <ExperimentalSelect
              selectedValue="world"
              options={[{ label: 'heloo', value: 'world' }]}
              size="s"
              disabled
              onChange={action('Selected value: ')}
            />
          ),
        },
        {
          title: 'Has error',
          component: (
            <ExperimentalSelect
              error="This is an error"
              selectedValue="world"
              options={[{ label: 'heloo', value: 'world' }]}
              onChange={action('Selected value: ')}
            />
          ),
        },
        {
          title: 'Has success',
          component: (
            <ExperimentalSelect
              success="This is success"
              selectedValue="world"
              options={[{ label: 'heloo', value: 'world' }]}
              onChange={action('Selected value: ')}
            />
          ),
        },
        {
          title: 'Full width',
          component: (
            <ExperimentalSelect
              width="auto"
              selectedValue="world"
              options={[{ label: 'heloo', value: 'world' }]}
              onChange={action('Selected value: ')}
            />
          ),
        },
        {
          title: 'With label',
          component: (
            <ExperimentalSelect
              success="This is success"
              width="auto"
              selectedValue="world"
              options={[{ label: 'heloo', value: 'world' }]}
              onChange={action('Selected value: ')}
            />
          ),
        },
        {
          title: 'Multiselect',
          component: (
            <ExperimentalSelect
              multiple
              width="auto"
              selectedValue="world"
              options={[
                { label: 'hello', value: 'world' },
                { label: 'goodbye', value: 'mars' },
                { label: 'seeya', value: 'neptune' },
                { label: 'peace out', value: 'moon' },
              ]}
              onChange={action('Selected value: ')}
            />
          ),
        },
      ]}
    />
  );
};

DefaultAndCommonUseCases.story = {
  name: 'Default and common use cases',
};

const Template =
  <T extends {}>(): Story<Props<T>> =>
  (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(args.selectedValue);
    return (
      <div
        style={{
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
        }}
      >
        <div>Configure with controls 👇</div>
        <ExperimentalSelect<T> {...args} selectedValue={state} onChange={(val) => setState(val)} />
      </div>
    );
  };

export const Controls = Template<string>().bind({});

Controls.args = {
  selectedValue: 'world',
  options: [
    { label: 'heloo', value: 'world' },
    { label: 'goodbye', value: 'mars' },
    { label: 'hsadfasdfasdfasdfasdfasdfasadfasdfaeloo', value: 'world2' },
  ],
  onChange: () => {},
};
