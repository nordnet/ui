// Button.stories.ts|tsx
import React, { useRef, useState } from 'react';
import { Meta } from '@storybook/react';
import MD from 'react-markdown';
import { Typography, Flag, Flexbox, FormField, Button, Box, BottomSheet } from '../..';
import { Display } from '../../common/Display';
import { Select } from '.';
import docs from './Select.md';

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

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Molecules/Select',
};

export default meta;

export const Docs = () => (
  <Typography type="primary">
    <MD>{docs}</MD>
  </Typography>
);

export const Primary = () => (
  <Select name="my-select" placeholder="Select a option...">
    {options.map((option) => (
      <Select.Option key={option.value} value={option.value} label={option.label} />
    ))}
  </Select>
);

export const DefaultValue = () => (
  <Select name="my-select" placeholder="Select a option..." defaultValue={options[0].value}>
    {options.map((option) => (
      <Select.Option key={option.value} value={option.value} label={option.label} />
    ))}
  </Select>
);

export const CustomOption = () => (
  <Select name="my-select" placeholder="Select a country...">
    {countryOptions.map((option) => (
      <Select.Option key={option.value} value={option.value} label={option.label}>
        <Flexbox container alignItems="center" gap={2}>
          <Flexbox item>
            <Flag country={option.value} size="m" />
          </Flexbox>
          <Flexbox item>
            <Typography type="primary">{option.label}</Typography>
          </Flexbox>
        </Flexbox>
      </Select.Option>
    ))}
  </Select>
);

export const DifferentSizes = () => (
  <Display
    items={[
      {
        title: 'Default (medium) size',
        component: (
          <Select name="my-select" size="m" placeholder="Select a option...">
            {options.map((option) => (
              <Select.Option key={`${option.value}-m`} value={option.value} label={option.label} />
            ))}
          </Select>
        ),
      },
      {
        title: 'Small size',
        component: (
          <Select name="my-small-select" size="s" placeholder="Select a option...">
            {options.map((option) => (
              <Select.Option key={`${option.value}-s`} value={option.value} label={option.label} />
            ))}
          </Select>
        ),
      },
    ]}
  />
);

export const DifferentWidths = () => (
  <Display
    items={[
      {
        title: '75 units wide',
        component: (
          <Select name="my-select" placeholder="Select a option..." width={75}>
            {options.map((option) => (
              <Select.Option key={`${option.value}-m`} value={option.value} label={option.label} />
            ))}
          </Select>
        ),
      },
      {
        title: 'Full width',
        component: (
          <Select name="my-full-width-select" placeholder="Select a option..." fullWidth>
            {options.map((option) => (
              <Select.Option key={`${option.value}-s`} value={option.value} label={option.label} />
            ))}
          </Select>
        ),
      },
    ]}
  />
);

export const WithFormField = () => (
  <FormField label="Label" required extraInfo="Extra info">
    <Select name="my-select" placeholder="Select a option...">
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value} label={option.label} />
      ))}
    </Select>
  </FormField>
);

export const WithError = () => (
  <FormField error="Error message" label="Label">
    <Select name="my-select" placeholder="Select a option..." hasError>
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value} label={option.label} />
      ))}
    </Select>
  </FormField>
);

export const Disabled = () => (
  <Select name="my-select" placeholder="Select a option..." disabled>
    {options.map((option) => (
      <Select.Option key={option.value} value={option.value} label={option.label} />
    ))}
  </Select>
);

export const GroupedOptions = () => (
  <Select name="my-select" placeholder="Select a option...">
    <Select.Group label="First Group">
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value} label={option.label} />
      ))}
    </Select.Group>
    <Select.Group label="Second Group">
      {otherOptions.map((option) => (
        <Select.Option key={option.value} value={option.value} label={option.label} />
      ))}
    </Select.Group>
  </Select>
);

export const MultiSelectUnControlled = () => {
  return (
    <Select name="my-select" multiple>
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value} label={option.label} multiple />
      ))}
    </Select>
  );
};

export const MultiSelect = () => {
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <Select
      name="my-select"
      multiple
      onChange={(e, value) => setSelectedCount(value ? value.length : 0)}
      valueDisplay={
        <Select.ValueDisplayMultiSelect
          label={selectedCount > 1 ? 'Colors' : 'Color'}
          placeholder="Select a value..."
          selectedCount={selectedCount}
        />
      }
    >
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value} label={option.label} multiple />
      ))}
    </Select>
  );
};

export const MultiSelectWithGroupedOptions = () => {
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <Select
      name="my-select"
      multiple
      placeholder="Select a option..."
      onChange={(e, value) => setSelectedCount(value ? value.length : 0)}
      valueDisplay={
        <Select.ValueDisplayMultiSelect
          label={selectedCount > 1 ? 'Colors' : 'Color'}
          placeholder="Select a value..."
          selectedCount={selectedCount}
        />
      }
    >
      <Select.Group label="First Group">
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value} label={option.label} multiple />
        ))}
      </Select.Group>
      <Select.Group label="Second Group">
        {otherOptions.map((option) => (
          <Select.Option key={option.value} value={option.value} label={option.label} multiple />
        ))}
      </Select.Group>
    </Select>
  );
};

export const WithForwardedRef = () => {
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
            <Select.Option key={option.value} value={option.value} label={option.label} />
          ))}
        </Select>
      </Box>
    </div>
  );
};

export const MobileView = () => {
  return (
    <Box>
      <Select name="my-select" placeholder="Select a option...">
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value} label={option.label} />
        ))}
      </Select>
    </Box>
  );
};
