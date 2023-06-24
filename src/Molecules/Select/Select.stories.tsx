// Button.stories.ts|tsx
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon, Typography, Flag, Flexbox } from '../..';
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
  <Select placeholder="placeholder">
    {options.map((option) => (
      <Option key={option.value} value={option.value} label={option.label} />
    ))}
  </Select>
);

export const CustomOption: ComponentStory<typeof Select> = () => (
  <Select placeholder="placeholder">
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
          <Select size="m" placeholder="placeholder">
            {options.map((option) => (
              <Option key={`${option.value}-m`} value={option.value} label={option.label} />
            ))}
          </Select>
        ),
      },
      {
        title: 'Small size',
        component: (
          <Select size="s" placeholder="placeholder">
            {options.map((option) => (
              <Option key={`${option.value}-s`} value={option.value} label={option.label} />
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
      <Option key={option.value} value={option.value} label={option.label} />
    ))}
  </Select>
);

export const Disabled: ComponentStory<typeof Select> = () => (
  <Select placeholder="placeholder" disabled>
    {options.map((option) => (
      <Option key={option.value} value={option.value} label={option.label} />
    ))}
  </Select>
);

export const GroupedOptions: ComponentStory<typeof Select> = () => (
  <Select placeholder="placeholder">
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
      multiple
      placeholder="placeholder"
      onChange={(e, value) => setSelectedCount(value ? value.length : 0)}
      valueDisplay={
        <ValueDisplayMultiSelect
          placeholder="Select a value"
          label={selectedCount > 1 ? 'Colors' : 'Color'}
          selectedCount={selectedCount}
        />
      }
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value} label={option.label} />
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
          placeholder="Select a value"
          selectedCount={selectedCount}
        />
      }
    >
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
      <Option key={option.value} value={option.value} label={option.label} />
    ))}
  </Select>
);

export const ControlledWithToggleAll: ComponentStory<typeof Select> = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [allSelected, setAllSelected] = useState<boolean>(false);

  const handleToggleAll = () => {
    if (!allSelected) {
      setSelectedValues(otherOptions.map((option) => option.value));
    } else {
      setSelectedValues([]);
    }
    setAllSelected(!allSelected);
  };

  return (
    <Select
      placeholder="placeholder"
      listBoxHeader={
        <ListBoxHeader withBorder>
          <ToggleAll label="Toggle All" onChange={handleToggleAll} checked={allSelected} />
        </ListBoxHeader>
      }
      value={selectedValues}
      valueDisplay={
        <ValueDisplayMultiSelect
          placeholder="Select a value"
          label={selectedValues.length > 0 ? 'selected' : ''}
          selectedCount={selectedValues.length}
        />
      }
      onChange={(_, newValues) => {
        if (newValues) {
          setSelectedValues(newValues as string[]);
          setAllSelected(newValues.length === options.length);
        }
      }}
      multiple
    >
      {otherOptions.map((option) => (
        <Option key={option.value} value={option.value} label={option.label} />
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
        <Option key={option.value} value={option.value} label={option.label} />
      ))}
    </Select>
  );
};
