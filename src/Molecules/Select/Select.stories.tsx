// Button.stories.ts|tsx
import React, { useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography, Flag, Flexbox, FormField, Button, Box } from '../..';
import { Display } from '../../common/Display';
import { Select, Option, Group, ValueDisplayMultiSelect } from '.';

const options = [
  {
    label: 'Red is the best color according to scientific research',
    value: '#Red is the best color according to scientific research',
  },
  {
    label: 'Green',
    value: '#4CAF50',
  },
  {
    label: 'Blue',
    value: '#2196F3',
  },
];

const otherOptions = [
  {
    label: 'First option',
    value: '1',
  },
  {
    label: 'second',
    value: '2',
  },
  {
    label: 'third',
    value: '3',
  },
];

const countryOptions = [
  {
    label: 'Sweden',
    value: 'se',
  },
  {
    label: 'Norway',
    value: 'no',
  },
  {
    label: 'Denmark',
    value: 'dk',
  },
  {
    label: 'Finland',
    value: 'fi',
  },
];

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Molecules/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Primary: ComponentStory<typeof Select> = () => (
  <Select name="my-select" placeholder="Select a option...">
    {options.map((option) => (
      <Option key={option.value} value={option.value} label={option.label} />
    ))}
  </Select>
);

export const CustomOption: ComponentStory<typeof Select> = () => (
  <Select name="my-select" placeholder="Select a country...">
    {countryOptions.map((option) => (
      <Option key={option.value} value={option.value} label={option.label}>
        <Flexbox container alignItems="center" gap={2}>
          <Flexbox item>
            <Flag country={option.value} size="m" />
          </Flexbox>
          <Flexbox item>
            <Typography type="primary">{option.label}</Typography>
          </Flexbox>
        </Flexbox>
      </Option>
    ))}
  </Select>
);

export const DifferentSizes: ComponentStory<typeof Select> = () => (
  <Display
    items={[
      {
        title: 'Default (medium) size',
        component: (
          <Select name="my-select" size="m" placeholder="Select a option...">
            {options.map((option) => (
              <Option key={`${option.value}-m`} value={option.value} label={option.label} />
            ))}
          </Select>
        ),
      },
      {
        title: 'Small size',
        component: (
          <Select name="my-small-select" size="s" placeholder="Select a option...">
            {options.map((option) => (
              <Option key={`${option.value}-s`} value={option.value} label={option.label} />
            ))}
          </Select>
        ),
      },
    ]}
  />
);

export const WithFormField: ComponentStory<typeof Select> = () => (
  <FormField label="Label" required extraInfo="Extra info">
    <Select name="my-select" placeholder="Select a option...">
      {options.map((option) => (
        <Option key={option.value} value={option.value} label={option.label} />
      ))}
    </Select>
  </FormField>
);

export const WithError: ComponentStory<typeof Select> = () => (
  <FormField error="Error message" label="Label">
    <Select name="my-select" placeholder="Select a option..." hasError>
      {options.map((option) => (
        <Option key={option.value} value={option.value} label={option.label} />
      ))}
    </Select>
  </FormField>
);

export const Disabled: ComponentStory<typeof Select> = () => (
  <Select name="my-select" placeholder="Select a option..." disabled>
    {options.map((option) => (
      <Option key={option.value} value={option.value} label={option.label} />
    ))}
  </Select>
);

export const GroupedOptions: ComponentStory<typeof Select> = () => (
  <Select name="my-select" placeholder="Select a option...">
    <Group label="First Group">
      {options.map((option) => (
        <Option key={option.value} value={option.value} label={option.label} />
      ))}
    </Group>
    <Group label="Second Group">
      {otherOptions.map((option) => (
        <Option key={option.value} value={option.value} label={option.label} />
      ))}
    </Group>
  </Select>
);

export const MultiSelect: ComponentStory<typeof Select> = () => {
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <Select
      name="my-select"
      multiple
      onChange={(e, value) => setSelectedCount(value ? value.length : 0)}
      valueDisplay={
        <ValueDisplayMultiSelect
          label={selectedCount > 1 ? 'Colors' : 'Color'}
          placeholder="Select a value..."
          selectedCount={selectedCount}
        />
      }
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value} label={option.label} multiple />
      ))}
    </Select>
  );
};

export const MultiSelectWithGroupedOptions: ComponentStory<typeof Select> = () => {
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <Select
      name="my-select"
      multiple
      placeholder="Select a option..."
      onChange={(e, value) => setSelectedCount(value ? value.length : 0)}
      valueDisplay={
        <ValueDisplayMultiSelect
          label={selectedCount > 1 ? 'Colors' : 'Color'}
          placeholder="Select a value..."
          selectedCount={selectedCount}
        />
      }
    >
      <Group label="First Group">
        {options.map((option) => (
          <Option key={option.value} value={option.value} label={option.label} multiple />
        ))}
      </Group>
      <Group label="Second Group">
        {otherOptions.map((option) => (
          <Option key={option.value} value={option.value} label={option.label} multiple />
        ))}
      </Group>
    </Select>
  );
};

export const WithForwardedRef: ComponentStory<typeof Select> = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const focusButton = () => {
    buttonRef.current?.focus();
  };

  return (
    <div>
      <Button onClick={focusButton}>Focus</Button>
      <Box mt={2}>
        <Select name="my-select" placeholder="Select a option..." ref={buttonRef}>
          {options.map((option) => (
            <Option key={option.value} value={option.value} label={option.label} />
          ))}
        </Select>
      </Box>
    </div>
  );
};
