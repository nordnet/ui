// Button.stories.ts|tsx
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon, Typography } from '../..';
import { Display } from '../../common/Display';

import {
  Select,
  Option,
  Group,
  Action,
  ListBoxFooter,
  ListBoxHeader,
  Search,
  ToggleAll,
  ValueDisplayMultiSelect,
} from '.';

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
  <Select placeholder="placeholder">
    {options.map((option) => (
      <Option key={option.value} value={option.value}>
        {option.label}
      </Option>
    ))}
  </Select>
);

export const CustomOption: ComponentStory<typeof Select> = () => (
  <Select placeholder="placeholder">
    {options.map((option) => (
      <Option key={option.value} value={option.value}>
        <Typography type="primary">{option.label}</Typography>
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
          <Select size="m" placeholder="placeholder">
            {options.map((option) => (
              <Option value={option.value}>{option.label}</Option>
            ))}
          </Select>
        ),
      },
      {
        title: 'Small size',
        component: (
          <Select size="s" placeholder="placeholder">
            {options.map((option) => (
              <Option value={option.value}>{option.label}</Option>
            ))}
          </Select>
        ),
      },
    ]}
  />
);

export const WithError: ComponentStory<typeof Select> = () => (
  <Select placeholder="placeholder" hasError>
    {options.map((option) => (
      <Option key={option.value} value={option.value}>
        {option.label}
      </Option>
    ))}
  </Select>
);

export const Disabled: ComponentStory<typeof Select> = () => (
  <Select placeholder="placeholder" disabled>
    {options.map((option) => (
      <Option key={option.value} value={option.value}>
        {option.label}
      </Option>
    ))}
  </Select>
);

export const GroupedOptions: ComponentStory<typeof Select> = () => (
  <Select placeholder="placeholder">
    <Group label="First Group">
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Group>
    <Group label="Second Group">
      {otherOptions.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Group>
  </Select>
);

export const MultiSelect: ComponentStory<typeof Select> = () => {
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <Select
      multiple
      placeholder="placeholder"
      onChange={(e, value) => setSelectedCount(value ? value.length : 0)}
      valueDisplay={
        <ValueDisplayMultiSelect
          placeholderLabel="Select a value"
          label={selectedCount > 1 ? 'Colors' : 'Color'}
          selectedCount={selectedCount}
        />
      }
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export const MultiSelectWithGroupedOptions: ComponentStory<typeof Select> = () => {
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <Select
      multiple
      placeholder="placeholder"
      onChange={(e, value) => setSelectedCount(value ? value.length : 0)}
      valueDisplay={
        <ValueDisplayMultiSelect
          label={selectedCount > 1 ? 'Colors' : 'Color'}
          placeholderLabel="Select a value"
          selectedCount={selectedCount}
        />
      }
    >
      <Group label="First Group">
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Group>
      <Group label="Second Group">
        {otherOptions.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Group>
    </Select>
  );
};

export const WithActionsInFooter: ComponentStory<typeof Select> = () => (
  <Select
    placeholder="placeholder"
    listBoxFooter={
      <ListBoxFooter>
        <Action icon={<Icon.Add16 color="inherit" />}>Some Action</Action>
      </ListBoxFooter>
    }
  >
    {options.map((option) => (
      <Option key={option.value} value={option.value}>
        {option.label}
      </Option>
    ))}
  </Select>
);

export const WithSelectAllInHeader: ComponentStory<typeof Select> = () => {
  return (
    <Select
      placeholder="placeholder"
      listBoxHeader={
        <ListBoxHeader withBorder>
          <ToggleAll label="Toggle All" />
        </ListBoxHeader>
      }
      multiple
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export const WithSearchInHeader: ComponentStory<typeof Select> = () => {
  const [filteredOptions, setFilteredOptions] = useState(options);

  return (
    <Select
      placeholder="placeholder"
      listBoxHeader={
        <ListBoxHeader>
          <Search
            label="search"
            placeholder="Search"
            onChange={(e) =>
              setFilteredOptions(
                options.filter((option) =>
                  option.label.toLowerCase().includes(e.target.value.toLowerCase()),
                ),
              )
            }
          />
        </ListBoxHeader>
      }
    >
      {filteredOptions.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};
