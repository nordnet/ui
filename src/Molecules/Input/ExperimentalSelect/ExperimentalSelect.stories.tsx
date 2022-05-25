import React from 'react';
import { Display } from '../../../common/Display';
import { ExperimentalSelect } from './ExperimentalSelect';

export default {
  title: 'Molecules / Input / ExperimentalSelect',
  parameters: {
    component: ExperimentalSelect,
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
              onChange={() => {}}
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
              onChange={() => {}}
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
              onChange={() => {}}
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
              onChange={() => {}}
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
              onChange={() => {}}
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
