import React from 'react';
import { action } from '@storybook/addon-actions';
import docs from './MultiStepProgress.mdx';
import { MultiStepProgress } from './MultiStepProgress';

const mockedSteps = [
  { current: false, done: true, label: 'Investment objective', name: 'investment_objective' },
  {
    current: true,
    done: false,
    label: 'Time and risk',
    name: 'time_and_risk',
    steps: [
      { current: false, done: true, label: 'Investment period', name: 'investment_period' },
      { current: true, done: false, label: 'Frequency', name: 'frequency' },
      { current: false, done: false, label: 'Amount', name: 'amount' },
    ],
  },
  { current: false, done: false, label: 'Allocations', name: 'allocations' },
];

const mockedStepsNotStarted = [
  { current: false, done: false, label: 'Investment objective', name: 'investment_objective' },
  {
    current: true,
    done: false,
    label: 'Time and risk',
    name: 'time_and_risk',
    steps: [
      { current: false, done: false, label: 'Investment period', name: 'investment_period' },
      { current: false, done: false, label: 'Frequency', name: 'frequency' },
      { current: false, done: false, label: 'Amount', name: 'amount' },
    ],
  },
  { current: false, done: false, label: 'Allocations', name: 'allocations' },
];

export default {
  title: 'Molecules / Multi Step Progress',

  parameters: {
    docs: {
      page: docs,
    },
    component: MultiStepProgress,
  },
};

export const BasicMultiStepProgress = {
  render: () => (
    <MultiStepProgress
      steps={mockedSteps}
      onStepClick={action(`step click`)}
      onSubStepClick={action(`sub step click`)}
    />
  ),
};

export const BasicMultiStepProgressWithDrawerClose = {
  render: () => (
    <MultiStepProgress
      steps={mockedSteps}
      onStepClick={action(`step click`)}
      onSubStepClick={action(`sub step click`)}
      closeDrawerOnStepClick
    />
  ),

  name: 'Basic Multi Step Progress (With Closing Drawer)',
};

export const NotStartedMultiStepProgress = {
  render: () => (
    <MultiStepProgress
      steps={mockedStepsNotStarted}
      onStepClick={action(`step click`)}
      onSubStepClick={action(`sub step click`)}
    />
  ),
};

export const MultiStepProgressWithLongContent = {
  render: () => (
    <>
      <h1>Lorem ipsum dolor</h1>
      <MultiStepProgress
        steps={mockedStepsNotStarted}
        onStepClick={action(`step click`)}
        onSubStepClick={action(`sub step click`)}
        sticky
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi autem debitis
        dolorem ducimus explicabo facilis fugiat impedit incidunt iusto laborum molestiae natus,
        obcaecati, officiis provident quae, quaerat quia soluta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi dolor dolorum eius
        molestiae qui repudiandae, voluptate. Ad aliquam dolor, labore natus necessitatibus nesciunt
        temporibus. Ad deserunt eius recusandae? Aspernatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi autem debitis
        dolorem ducimus explicabo facilis fugiat impedit incidunt iusto laborum molestiae natus,
        obcaecati, officiis provident quae, quaerat quia soluta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi dolor dolorum eius
        molestiae qui repudiandae, voluptate. Ad aliquam dolor, labore natus necessitatibus nesciunt
        temporibus. Ad deserunt eius recusandae? Aspernatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi autem debitis
        dolorem ducimus explicabo facilis fugiat impedit incidunt iusto laborum molestiae natus,
        obcaecati, officiis provident quae, quaerat quia soluta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi dolor dolorum eius
        molestiae qui repudiandae, voluptate. Ad aliquam dolor, labore natus necessitatibus nesciunt
        temporibus. Ad deserunt eius recusandae? Aspernatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi autem debitis
        dolorem ducimus explicabo facilis fugiat impedit incidunt iusto laborum molestiae natus,
        obcaecati, officiis provident quae, quaerat quia soluta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi dolor dolorum eius
        molestiae qui repudiandae, voluptate. Ad aliquam dolor, labore natus necessitatibus nesciunt
        temporibus. Ad deserunt eius recusandae? Aspernatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi autem debitis
        dolorem ducimus explicabo facilis fugiat impedit incidunt iusto laborum molestiae natus,
        obcaecati, officiis provident quae, quaerat quia soluta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi dolor dolorum eius
        molestiae qui repudiandae, voluptate. Ad aliquam dolor, labore natus necessitatibus nesciunt
        temporibus. Ad deserunt eius recusandae? Aspernatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi autem debitis
        dolorem ducimus explicabo facilis fugiat impedit incidunt iusto laborum molestiae natus,
        obcaecati, officiis provident quae, quaerat quia soluta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi dolor dolorum eius
        molestiae qui repudiandae, voluptate. Ad aliquam dolor, labore natus necessitatibus nesciunt
        temporibus. Ad deserunt eius recusandae? Aspernatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi autem debitis
        dolorem ducimus explicabo facilis fugiat impedit incidunt iusto laborum molestiae natus,
        obcaecati, officiis provident quae, quaerat quia soluta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi dolor dolorum eius
        molestiae qui repudiandae, voluptate. Ad aliquam dolor, labore natus necessitatibus nesciunt
        temporibus. Ad deserunt eius recusandae? Aspernatur.
      </p>
    </>
  ),
};
