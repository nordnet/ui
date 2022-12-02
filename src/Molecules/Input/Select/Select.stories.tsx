import React, { createElement, useCallback, useMemo, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import R from 'ramda';
import styled from 'styled-components';

import {
  Badge,
  Box,
  CardWithTitle,
  Flexbox,
  OldIcon,
  Input,
  Link,
  Modal,
  Number,
  TrackingContext,
  Typography,
} from '../../..';
import { Display } from '../../../common/Display';
import docs from './Select.mdx';
import { Option, Props } from './Select.types';

const useSelectMachineFromContext = Input.Select.useSelectMachineFromContext;

const FlexedBox = styled(Box)`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const accountOptions = [
  {
    label: 'First account',
    value: '1',
    symbol: 'AF',
    accno: '123',
    amount: { value: 212, currency: 'SEK' },
  },
  {
    label: 'Second acc 2',
    value: '2',
    symbol: '-',
    accno: '123',
    amount: { value: 111, currency: 'SEK' },
  },
  {
    label: 'Third 3',
    value: '3',
    symbol: 'ISK',
    accno: '123',
    amount: { value: 1, currency: 'DKK' },
  },
  {
    label: 'Acc 4',
    value: '4',
    symbol: 'ISK',
    accno: '123',
    amount: { value: 1, currency: 'DKK' },
  },
  {
    label: 'Acc 5',
    value: '5',
    symbol: 'ISK',
    accno: '123',
    amount: { value: 1, currency: 'DKK' },
  },
  {
    label: 'Acc 6',
    value: '6',
    symbol: 'ISK',
    accno: '123',
    amount: { value: 1, currency: 'DKK' },
  },
  {
    label: 'Acc 7',
    value: '7',
    symbol: 'ISK',
    accno: '123',
    amount: { value: 1, currency: 'DKK' },
  },
  {
    label: 'Acc 8',
    value: '8',
    symbol: 'ISK',
    accno: '123',
    amount: { value: 1, currency: 'DKK' },
  },
  {
    label: 'Acc 9',
    value: '9',
    symbol: 'ISK',
    accno: '123',
    amount: { value: 1, currency: 'DKK' },
  },
  {
    label: 'Acc 10',
    value: '10',
    symbol: 'ISK',
    accno: '123',
    amount: { value: 1, currency: 'DKK' },
  },
  {
    label: 'Acc 11',
    value: '11',
    symbol: 'ISK',
    accno: '123',
    amount: { value: 1, currency: 'DKK' },
  },
  {
    label: 'Acc 12',
    value: '12',
    symbol: 'ISK',
    accno: '123',
    amount: { value: 1, currency: 'DKK' },
  },
];

const AccountValue = () => {
  const [state] = useSelectMachineFromContext();

  const selectedOption =
    state.context.selectedItems.length === 0 ? null : state.context.selectedItems[0];

  return (
    <FlexedBox px={2} pr={8}>
      {!selectedOption ? (
        state.context.placeholder
      ) : (
        <Flexbox container item justifyContent="space-between" gutter={2} grow={1}>
          <Flexbox item container alignItems="center" basis="32px" grow={0}>
            <Badge.Account badgeSize="s">{selectedOption.symbol}</Badge.Account>
          </Flexbox>
          <Flexbox item container alignItems="center" grow={1}>
            <Typography type="tertiary" weight="bold" color={(t) => t.color.text}>
              {selectedOption.label}
            </Typography>
            <Typography type="tertiary">
              <span aria-hidden="true">&nbsp;&#8231;&nbsp;</span>
              {selectedOption.accno}
            </Typography>
          </Flexbox>
        </Flexbox>
      )}
    </FlexedBox>
  );
};

const StyledBox = styled(Box)<{ focused?: boolean; isKeyboardNavigation?: boolean }>`
  cursor: pointer;
  background: ${(p) => (p.focused ? p.theme.color.background : p.theme.color.card)};
  ${(p) =>
    !p.isKeyboardNavigation
      ? `
  &: hover {
    background: ${p.theme.color.background};
    }
  `
      : ''}
`;
// @ts-ignore
const AccountListItem = ({ index }) => {
  const [state] = useSelectMachineFromContext();
  const option = state.context.options[index];
  const isKeyboardNavigation = state.matches('interaction.enabled.active.navigation.keyboard');
  const selected = state.context.selectedItems.includes(option);
  const focused = isKeyboardNavigation && state.context.itemFocusIdx === index;
  return (
    <StyledBox px={2} py={1} focused={focused} isKeyboardNavigation={isKeyboardNavigation}>
      <Flexbox container justifyContent="space-between" gutter={4}>
        <Flexbox item container alignItems="center" basis="32px" grow={0}>
          <Badge.Account badgeSize="s">{option.symbol}</Badge.Account>
        </Flexbox>
        <Flexbox item container direction="column" grow={1}>
          <Flexbox item>
            <Typography type="tertiary" weight="bold" color={(t) => t.color.text}>
              {option.label}
            </Typography>
            <Typography type="tertiary">
              <span aria-hidden="true">&nbsp;&#8231;&nbsp;</span>
              {option.accno}
            </Typography>
          </Flexbox>
          <Flexbox item>
            <Typography type="caption" color={(t) => t.color.text}>
              <Number value={option.amount.value} currency={option.amount.currency} />
            </Typography>
          </Flexbox>
        </Flexbox>
        {selected && (
          <Flexbox item container alignItems="center">
            <Box pl={2}>
              <OldIcon.CheckMark color={(t) => t.color.cta} size={4} />
            </Box>
          </Flexbox>
        )}
      </Flexbox>
    </StyledBox>
  );
};

export default {
  title: 'Molecules / Input / Select',
  parameters: {
    docs: {
      page: docs,
    },
  },
} as Meta;

export const defaultStory = () => (
  <div style={{ padding: '10px', height: '200px' }}>
    <Input.Select
      id="input-1"
      options={[
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
      ]}
      label="Label"
      placeholder="Placeholder"
    />
  </div>
);

export const withLabelTooltip = () => (
  <Input.Select
    id="input-1"
    options={[
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
    ]}
    label="Label"
    placeholder="Placeholder"
    labelTooltip="Tooltip for select field"
  />
);

export const withLabelTooltipPositionTop = () => (
  <>
    <br />
    <br />
    <Input.Select
      id="input-1"
      options={[
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
      ]}
      label="Label"
      placeholder="Placeholder"
      labelTooltip="Tooltip for select field"
      labelTooltipPosition="top"
    />
  </>
);

export const hideLabel = () => (
  <Input.Select
    id="input-1"
    options={[
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
    ]}
    label="Label"
    hideLabel
    placeholder="Placeholder"
  />
);
export const overflowStory = () => (
  <Input.Select
    id="input-1"
    options={new Array(100).fill(null)?.map((_, i) => ({
      value: i,
      label: `${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}`,
    }))}
    label="LabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabel"
    placeholder="PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder"
  />
);

export const withModalTitleFullScreenOnMobile = () => (
  <Input.Select
    id="input-1"
    options={[
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
    ]}
    label="Label"
    placeholder="Placeholder"
    labelTooltip="Tooltip for select field"
    fullscreenOnMobile
  />
);

export const preselectedOptions = () =>
  createElement(() => {
    // This component you need to redefine for your particular case
    // Consider translations and a11y!
    const CustomSelectedValue = useCallback(() => {
      const [machineState] = useSelectMachineFromContext();
      const selectedCount = machineState.context.selectedItems.length;
      return (
        <FlexedBox px={2}>
          <Typography type="secondary">
            {selectedCount === 0 ? machineState.context.placeholder : `${selectedCount} selected`}
          </Typography>
        </FlexedBox>
      );
    }, []);

    const [values, setValues] = useState([
      // Non-referentially equal options
      { ...accountOptions[1] },
      { ...accountOptions[2] },
    ]);

    return (
      <Input.Select
        id="input-1"
        options={accountOptions}
        value={values}
        // @ts-ignore
        onChange={setValues}
        components={{ SelectedValue: CustomSelectedValue }}
        multiselect
        label="Label"
        placeholder="Placeholder"
      />
    );
  });

// These styles need to be applied in order for the custom component to truncate in the input
const StyledFlexbox = styled(Flexbox)`
  width: 100%;
  padding-left: 8px;
  padding-right: 20px;
`;

const EllipsizingText = styled(Typography)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const passingTruncatedComponents = () =>
  createElement(() => {
    // This component you need to redefine for your particular case
    // Why isn't this implemented in the component? Because depending of what you put inside the EllipsizingText it may or may not kill the Truncation
    // That's just how truncation works, it needs a parent and child with specific props
    const CustomSelectedValue = useCallback(() => {
      const [machineState] = useSelectMachineFromContext();
      const selectedCount = machineState.context.selectedItems.length;
      return (
        <StyledFlexbox container alignItems="center">
          <EllipsizingText type="secondary">
            {/* adding Box or Flexbox child here will kill the Truncation, but overflow will still be hidden */}
            {selectedCount === 0
              ? machineState.context.placeholder
              : `${selectedCount} selected along with a very long text for reference of truncation`}
          </EllipsizingText>
        </StyledFlexbox>
      );
    }, []);

    const [values, setValues] = useState([
      // Non-referentially equal options
      { ...accountOptions[1] },
      { ...accountOptions[2] },
    ]);

    return (
      <Input.Select
        id="input-1"
        options={accountOptions}
        value={values}
        // @ts-ignore
        onChange={setValues}
        components={{ SelectedValue: CustomSelectedValue }}
        multiselect
        label="Label"
        placeholder="Placeholder"
      />
    );
  });

export const multiSelectUncontrolled = () =>
  createElement(() => {
    // This component you need to redefine for your particular case
    // Consider translations and a11y!
    const CustomSelectedValue = useCallback(() => {
      const [machineState] = useSelectMachineFromContext();
      const selectedCount = machineState.context.selectedItems.length;
      return (
        <FlexedBox px={2}>
          <Typography type="secondary">
            {selectedCount === 0 ? machineState.context.placeholder : `${selectedCount} selected`}
          </Typography>
        </FlexedBox>
      );
    }, []);

    return (
      <Input.Select
        id="input-1"
        options={accountOptions}
        components={{ SelectedValue: CustomSelectedValue }}
        multiselect
        label="Label"
        placeholder="Placeholder"
      />
    );
  });
export const tracking = () => (
  <TrackingContext.Provider
    value={{
      track: (componentName, e, props) =>
        // @ts-ignore
        action('Tracking')(componentName, e.type, e.payload, props),
    }}
  >
    <Input.Select
      id="input-1"
      options={[
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
      ]}
      label="Label"
      placeholder="Placeholder"
    />
  </TrackingContext.Provider>
);
export const searchStory = () => (
  <Input.Select
    id="input-1"
    options={[
      { value: 1, label: 'Abba' },
      { value: 2, label: 'Btoiwent' },
      { value: 3, label: 'Crtetyrh' },
      { value: 4, label: 'Dositenyoe' },
      { value: 5, label: 'Dasitenyoe' },
      { value: 6, label: 'Xfoteibnyo' },
      { value: 7, label: '3125236' },
    ]}
    label="Label"
    placeholder="Placeholder"
  />
);

export const two = () => (
  <>
    <Input.Select
      id="input-1"
      options={[
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
      ]}
      label="Label"
      placeholder="Placeholder"
    />
    <Input.Select
      id="input-2"
      options={[
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
      ]}
      label="Label"
      placeholder="Placeholder"
    />
  </>
);

export const fullWidth = () => (
  <Input.Select
    id="onchange-select"
    fullWidth
    options={accountOptions}
    label="User account"
    placeholder="Select account"
  />
);

export const autoFocus = () => (
  <Input.Select
    id="onchange-select"
    autoFocus
    options={accountOptions}
    label="User account"
    placeholder="Select account"
  />
);

export const disabledItems = () => {
  return (
    <Input.Select
      id="onchange-select"
      options={accountOptions?.map((acc, i) =>
        i === 1 || i === 2 ? { ...acc, disabled: true } : acc,
      )}
      label="User account"
      placeholder="Select account"
    />
  );
};

export const customRenderers = () => {
  return (
    <Input.Select
      id="custom-renderers-select"
      options={accountOptions}
      components={{
        ListItem: AccountListItem,
        SelectedValue: AccountValue,
      }}
      label="User account"
      placeholder="Select account"
    />
  );
};

export const actions = () =>
  createElement(() => {
    const [value, setValue] = useState([]);
    return (
      <Input.Select
        id="custom-renderers-select"
        options={accountOptions}
        value={value}
        // @ts-ignore
        onChange={setValue}
        actions={[
          {
            icon: <OldIcon.AddWithCircle size={4} color="currentColor" />,
            label: 'Add more stuff to dropdown',
            onSelect: action('Action triggered!'),
          },
          {
            icon: <OldIcon.Archive size={4} color="currentColor" />,
            label: 'Archive',
            onSelect: action('Action Archive triggered!'),
          },
          {
            label: 'No icon action',
            onSelect: action('Action No icon triggered!'),
          },
          {
            label: 'Disabled action',
            onSelect: action('Should not appear!'),
            disabled: true,
          },
        ]}
        label="User account"
        placeholder="Select account"
      />
    );
  });
export const actionsAndEmptyOptionList = () =>
  createElement(() => {
    const [value, setValue] = useState([]);
    return (
      <Input.Select
        id="custom-renderers-select"
        options={[]}
        value={value}
        // @ts-ignore
        onChange={setValue}
        actions={[
          {
            icon: <OldIcon.AddWithCircle size={4} color="currentColor" />,
            label: 'Add more stuff to dropdown',
            onSelect: action('Action triggered!'),
          },
          {
            icon: <OldIcon.Archive size={4} color="currentColor" />,
            label: 'Archive',
            onSelect: action('Action Archive triggered!'),
          },
          {
            label: 'No icon action',
            onSelect: action('Action No icon triggered!'),
          },
          {
            label: 'Disabled action',
            onSelect: action('Should not appear!'),
            disabled: true,
          },
        ]}
        label="User account"
        placeholder="Select account"
      />
    );
  });
export const fullyEmpty = () =>
  createElement(() => {
    const [value, setValue] = useState([]);
    return (
      <Input.Select
        id="custom-renderers-select"
        options={[]}
        value={value}
        // @ts-ignore
        onChange={setValue}
        label="User account"
        placeholder="Select account"
      />
    );
  });

export const onBlurAndOnFocus = () => {
  return (
    <Input.Select
      id="custom-renderers-select"
      options={accountOptions}
      label="User account"
      placeholder="Select account"
      onBlur={action('blur')}
      onFocus={action('focus')}
    />
  );
};

export const multiselect = () =>
  createElement(() => {
    const [value, setValue] = useState([]);

    // This component you need to redefine for your particular case
    // Consider translations and a11y!
    const CustomSelectedValue = useMemo(
      () => () => {
        const [machineState] = useSelectMachineFromContext();
        const selectedCount = machineState.context.selectedItems.length;
        return (
          <FlexedBox px={2}>
            <Typography
              type="secondary"
              color={selectedCount === 0 ? (t) => t.color.placeholderText : undefined}
            >
              {selectedCount === 0 ? machineState.context.placeholder : `${selectedCount} selected`}
            </Typography>
          </FlexedBox>
        );
      },
      [],
    );
    return (
      <Input.Select
        id="custom-renderers-select"
        options={accountOptions}
        value={value}
        // @ts-ignore
        onChange={setValue}
        components={{ SelectedValue: CustomSelectedValue }}
        multiselect
        label="User account"
        placeholder="Select account"
      />
    );
  });

const MultiselectColumnsTemplate: Story<{ itemsPerColumn: number; columnWidth: string }> = (
  args,
) => {
  const MultiselectColumnsExample = () => {
    const [value, setValue] = useState([]);

    // This component you need to redefine for your particular case
    // Consider translations and a11y!
    const CustomSelectedValue = () => {
      const [machineState] = useSelectMachineFromContext();
      const selectedCount = machineState.context.selectedItems.length;
      return (
        <FlexedBox px={2}>
          <Typography
            type="secondary"
            color={selectedCount === 0 ? (t) => t.color.placeholderText : undefined}
          >
            {selectedCount === 0 ? machineState.context.placeholder : `${selectedCount} selected`}
          </Typography>
        </FlexedBox>
      );
    };

    return (
      <Input.Select
        id="custom-renderers-select"
        options={accountOptions}
        value={value}
        // @ts-ignore
        onChange={setValue}
        components={{ SelectedValue: CustomSelectedValue }}
        multiselect
        label="User account"
        placeholder="Select account"
        itemsPerColumn={args.itemsPerColumn}
        columnWidth={args.columnWidth}
      />
    );
  };

  return <MultiselectColumnsExample />;
};

export const MultiselectColumns = MultiselectColumnsTemplate.bind({});
MultiselectColumns.args = {
  itemsPerColumn: 4,
  columnWidth: '200px',
};

export const multiselectActions = () =>
  createElement(() => {
    const [value, setValue] = useState([]);

    // This component you need to redefine for your particular case
    // Consider translations and a11y!
    const CustomSelectedValue = useMemo(
      () => () => {
        const [machineState] = useSelectMachineFromContext();
        const selectedCount = machineState.context.selectedItems.length;
        return (
          <FlexedBox px={2}>
            <Typography
              type="secondary"
              color={selectedCount === 0 ? (t) => t.color.placeholderText : undefined}
            >
              {selectedCount === 0 ? machineState.context.placeholder : `${selectedCount} selected`}
            </Typography>
          </FlexedBox>
        );
      },
      [],
    );
    return (
      <Input.Select
        id="custom-renderers-select"
        options={accountOptions}
        value={value}
        // @ts-ignore
        onChange={setValue}
        components={{ SelectedValue: CustomSelectedValue }}
        actions={[
          {
            icon: <OldIcon.AddWithCircle size={4} color="currentColor" />,
            label: 'Add more stuff to dropdown',
            onSelect: action('Action add triggered!'),
          },
          {
            icon: <OldIcon.Archive size={4} color="currentColor" />,
            label: 'Archive',
            onSelect: action('Action archive triggered!'),
          },
        ]}
        multiselect
        label="User account"
        placeholder="Select account"
      />
    );
  });

const accountOptionsAndSelectAll: Option[] = [
  {
    label: 'Select All',
    value: undefined,
    [Input.Select.SYMBOL_ALL]: true,
  },
  ...accountOptions,
  { label: 'Disabled', value: 'Doesnt matter', disabled: true },
];

export const multiselectSelectAll = () =>
  createElement(() => {
    const [value, setValue] = useState([]);

    // This component you need to redefine for your particular case
    // Consider translations and a11y!
    const CustomSelectedValue = useCallback(() => {
      const [machineState] = useSelectMachineFromContext();
      const selectedCount = machineState.context.selectedItems.length;
      const allSelected = machineState.context.selectedItems.some(
        (x) => x[Input.Select.SYMBOL_ALL],
      );
      let label;
      if (allSelected) {
        label = 'All selected';
      } else if (selectedCount === 0) {
        label = machineState.context.placeholder;
      } else {
        label = `${selectedCount} selected`;
      }
      return (
        <FlexedBox px={2}>
          <Typography
            type="secondary"
            color={selectedCount === 0 ? (t) => t.color.placeholderText : undefined}
          >
            {label}
          </Typography>
        </FlexedBox>
      );
    }, []);
    return (
      <Input.Select
        id="multiwithall-select"
        options={accountOptionsAndSelectAll}
        value={value}
        // @ts-ignore
        onChange={setValue}
        components={{
          SelectedValue: CustomSelectedValue,
        }}
        multiselect
        label="User account"
        placeholder="Select account"
      />
    );
  });

export const multiselectSelectAllWithFullScreenOnMobile = () =>
  createElement(() => {
    const [value, setValue] = useState([]);

    // This component you need to redefine for your particular case
    // Consider translations and a11y!
    const CustomSelectedValue = useCallback(() => {
      const [machineState] = useSelectMachineFromContext();
      const selectedCount = machineState.context.selectedItems.length;
      const allSelected = machineState.context.selectedItems.some(
        (x) => x[Input.Select.SYMBOL_ALL],
      );
      let label;
      if (allSelected) {
        label = 'All selected';
      } else if (selectedCount === 0) {
        label = machineState.context.placeholder;
      } else {
        label = `${selectedCount} selected`;
      }
      return (
        <FlexedBox px={2}>
          <Typography
            type="secondary"
            color={selectedCount === 0 ? (t) => t.color.placeholderText : undefined}
          >
            {label}
          </Typography>
        </FlexedBox>
      );
    }, []);
    return (
      <Input.Select
        id="multiwithall-select"
        options={[
          ...accountOptionsAndSelectAll,
          { value: 21, label: 'Acc21' },
          { value: 22, label: 'Acc22' },
          { value: 23, label: 'Acc23' },
        ]}
        value={value}
        // @ts-ignore
        onChange={setValue}
        components={{
          SelectedValue: CustomSelectedValue,
        }}
        multiselect
        label="User account"
        placeholder="Select account"
        fullscreenOnMobile
      />
    );
  });

export const changesFromProps = () =>
  createElement(() => {
    const [searchQuery, setSearchQuery] = useState('');
    const [accs, setAccs] = useState(accountOptions);
    const [value, setValue] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const removeAcc = () => setAccs(accs.slice(0, -1));
    // @ts-ignore
    const selectFirst = () => setValue([accountOptions[0]]);

    return (
      <>
        <button type="button" onClick={removeAcc}>
          Delete
        </button>

        <button type="button" onClick={selectFirst}>
          Select first
        </button>
        <button type="button" onClick={() => setDisabled(true)}>
          Disable
        </button>
        <button type="button" onClick={() => setDisabled(false)}>
          Enable
        </button>
        <pre>{JSON.stringify(value, null, 2)}</pre>
        <pre>{JSON.stringify(accs, null, 2)}</pre>
        <Input.Select
          id="onchange-select"
          value={value}
          disabled={disabled}
          // @ts-ignore
          onChange={setValue}
          options={accs}
          label="User account"
          showSearch
          searchQuery={searchQuery}
          onSearchQueryChange={({ payload }) => {
            action('search')(payload);
            setSearchQuery(payload);
          }}
          placeholder="Select account"
        />
      </>
    );
  });

export const accessibleFromDocumentForms = () =>
  createElement(() => {
    const FORM_NAME = 'testForm';
    const SELECT_NAME = 'mySelect';

    const [, forceUpdate] = useState([]);

    return (
      <form name={FORM_NAME}>
        <Input.Select
          id="forms-input-test"
          options={accountOptions}
          name={SELECT_NAME}
          label="User account"
          placeholder="Select account"
          // Every time the value updates
          // The story gonna rerender
          // So we have fresh stuff from document.forms
          // @ts-ignore
          onChange={() => setTimeout(() => forceUpdate({}), 10)}
        />
        <br />
        Value in form: &quot;
        {R.path(['forms', FORM_NAME, 'elements', SELECT_NAME, 'value'])(document)}&quot;
      </form>
    );
  });

export const controlledBehaviour = () =>
  createElement(() => {
    const [value, setValue] = useState(() => [accountOptions[1]]);
    return (
      <Input.Select
        id="onchange-select"
        options={accountOptions}
        value={value}
        // @ts-ignore
        onChange={setValue}
        label="User account"
        placeholder="Select account"
      />
    );
  });
controlledBehaviour.story = {
  name: 'Controlled behaviour',
};

export const defaultVariations = () => {
  return (
    <Display
      items={[
        {
          title: 'Disabled',
          component: (
            <Input.Select
              id="disabled-select"
              options={accountOptions}
              label="User account"
              disabled
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Error',
          component: (
            <Input.Select
              options={accountOptions}
              id="error-select"
              label="User account"
              error="Some error"
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Info',
          component: (
            <Input.Select
              options={accountOptions}
              id="info-select"
              label="User account"
              extraInfo="Some extra info"
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Success',
          component: (
            <Input.Select
              id="success-select"
              options={accountOptions}
              label="User account"
              success
              placeholder="Select account"
            />
          ),
        },
      ]}
    />
  );
};

defaultVariations.story = {
  name: 'Default variations',
};
export const sizeS = () => {
  return (
    <Display
      items={[
        {
          title: 'Disabled',
          component: (
            <Input.Select
              size="s"
              id="disabled-select"
              options={accountOptions}
              label="User account"
              disabled
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Error',
          component: (
            <Input.Select
              size="s"
              id="error-select"
              options={accountOptions}
              label="User account"
              error="Some error"
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Info',
          component: (
            <Input.Select
              size="s"
              id="info-select"
              options={accountOptions}
              label="User account"
              extraInfo="Some extra info"
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Success',
          component: (
            <Input.Select
              size="s"
              id="success-select"
              options={accountOptions}
              label="User account"
              success
              placeholder="Select account"
            />
          ),
        },
      ]}
    />
  );
};

const createCounter = () => {
  let i = 0;
  // eslint-disable-next-line no-plusplus
  return { next: () => i++ };
};

export const linkWithDropdownAndSearchBoxSecondary = () =>
  createElement(() => {
    // Don't mind the counter
    // just to have persistent unique keys
    const counter = createCounter();
    const customComponents = useMemo(
      () => ({
        SelectedValue: () => {
          const [state] = useSelectMachineFromContext();

          return (
            <Link as="div">
              <Flexbox container alignItems="center" gutter={1}>
                <Flexbox item container alignItems="center">
                  <OldIcon.AddWithCircle inline color={(t) => t.color.text} size={3.5} />
                </Flexbox>
                <Flexbox item>
                  <Typography type="secondary" color={(t) => t.color.text}>
                    {state.context.placeholder}
                  </Typography>
                </Flexbox>
              </Flexbox>
            </Link>
          );
        },
      }),
      [],
    );

    const [value, setValue] = useState([]);
    const hugeOptionsList = useMemo(
      () =>
        accountOptions
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          )
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          )
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          ),
      [accountOptions], // eslint-disable-line react-hooks/exhaustive-deps
    );

    // @ts-ignore
    const handleChange = (newVal) => {
      action('change')(newVal);
      setValue(newVal);
    };

    return (
      <Flexbox container justifyContent="flex-start">
        <Input.Select
          options={hugeOptionsList}
          label="User account"
          id="input-select-search-inside"
          placeholder="Select account"
          noFormField
          showSearch
          value={value}
          components={customComponents}
          onChange={handleChange}
          width="150px"
        />
      </Flexbox>
    );
  });

export const linkWithDropdownAndSearchBoxTertiary = () =>
  createElement(() => {
    const customComponents = useMemo(
      () => ({
        SelectedValue: () => {
          const [state] = useSelectMachineFromContext();

          return (
            <Link as="div">
              <Flexbox container alignItems="center" gutter={1}>
                <Flexbox item container alignItems="center">
                  <OldIcon.AddWithCircle inline color={(t) => t.color.text} size={3} />
                </Flexbox>
                <Flexbox item>
                  <Typography type="tertiary" color={(t) => t.color.text}>
                    {state.context.placeholder}
                  </Typography>
                </Flexbox>
              </Flexbox>
            </Link>
          );
        },
      }),
      [],
    );

    const [value, setValue] = useState([]);
    // Don't mind the counter
    // just to have persistent unique keys
    const counter = createCounter();
    const hugeOptionsList = useMemo(
      () =>
        accountOptions
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          )
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          )
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          ),
      [accountOptions], // eslint-disable-line react-hooks/exhaustive-deps
    );

    // @ts-ignore
    const handleChange = (newVal) => {
      action('change')(newVal);
      setValue(newVal);
    };

    return (
      <Flexbox container justifyContent="flex-start">
        <Input.Select
          options={hugeOptionsList}
          label="User account"
          id="input-select-search-inside"
          placeholder="Select account"
          noFormField
          showSearch
          value={value}
          components={customComponents}
          onChange={handleChange}
          width="250px"
        />
      </Flexbox>
    );
  });

export const linkWithDropdownAndSearchBoxMultiselect = () =>
  createElement(() => {
    const customComponents = useMemo(
      () => ({
        SelectedValue: () => {
          const [state] = useSelectMachineFromContext();

          return (
            <Link as="div">
              <Flexbox container alignItems="center" gutter={1}>
                <Flexbox item container alignItems="center">
                  <OldIcon.AddWithCircle inline color={(t) => t.color.text} size={3} />
                </Flexbox>
                <Flexbox item>
                  <Typography type="tertiary" color={(t) => t.color.text}>
                    {state.context.placeholder}
                  </Typography>
                </Flexbox>
              </Flexbox>
            </Link>
          );
        },
      }),
      [],
    );

    const [value, setValue] = useState([]);
    // Don't mind the counter
    // just to have persistent unique keys
    const counter = createCounter();
    const hugeOptionsList = useMemo(
      () =>
        accountOptions
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          )
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          )
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          ),
      [accountOptions], // eslint-disable-line react-hooks/exhaustive-deps
    );

    // @ts-ignore
    const handleChange = (newVal) => {
      action('change')(newVal);
      setValue(newVal);
    };

    return (
      <TrackingContext.Provider
        value={{
          track: (componentName, e, props) =>
            // @ts-ignore
            action('Tracking')(componentName, e.type, e.payload, props),
        }}
      >
        <Flexbox container justifyContent="flex-start">
          <Input.Select
            options={hugeOptionsList}
            label="User account"
            id="input-select-search-inside"
            placeholder="Select account"
            noFormField
            showSearch
            multiselect
            value={value}
            width="300px"
            listMaxHeight="400px"
            components={customComponents}
            onChange={handleChange}
            actions={[
              {
                label: 'Action',
                onSelect: action('Action triggered'),
              },
            ]}
          />
        </Flexbox>
      </TrackingContext.Provider>
    );
  });

export const linkWithDropdownAndSearchBoxMultiselectWithFullScreenOnMobile = () =>
  createElement(() => {
    const customComponents = useMemo(
      () => ({
        SelectedValue: () => {
          const [state] = useSelectMachineFromContext();

          return (
            <Link as="div">
              <Flexbox container alignItems="center" gutter={1}>
                <Flexbox item container alignItems="center">
                  <OldIcon.AddWithCircle inline color={(t) => t.color.text} size={3} />
                </Flexbox>
                <Flexbox item>
                  <Typography type="tertiary" color={(t) => t.color.text}>
                    {state.context.placeholder}
                  </Typography>
                </Flexbox>
              </Flexbox>
            </Link>
          );
        },
      }),
      [],
    );

    const [value, setValue] = useState([]);
    // Don't mind the counter
    // just to have persistent unique keys
    const counter = createCounter();
    const hugeOptionsList = useMemo(
      () =>
        accountOptions
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          )
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          )
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          ),
      [accountOptions], // eslint-disable-line react-hooks/exhaustive-deps
    );

    // @ts-ignore
    const handleChange = (newVal) => {
      action('change')(newVal);
      setValue(newVal);
    };

    return (
      <TrackingContext.Provider
        value={{
          track: (componentName, e, props) =>
            // @ts-ignore
            action('Tracking')(componentName, e.type, e.payload, props),
        }}
      >
        <Flexbox container justifyContent="flex-start">
          <Input.Select
            options={hugeOptionsList}
            label="User account"
            id="input-select-search-inside"
            placeholder="Select account"
            noFormField
            showSearch
            multiselect
            value={value}
            width="300px"
            listMaxHeight="400px"
            components={customComponents}
            onChange={handleChange}
            fullscreenOnMobile
            actions={[
              {
                label: 'Action',
                onSelect: action('Action triggered'),
              },
            ]}
          />
        </Flexbox>
      </TrackingContext.Provider>
    );
  });

export const listPositionedToTheLeft = () =>
  createElement(() => {
    const customComponents = useMemo(
      () => ({
        // @ts-ignore
        SelectedValue: () => {
          const [state] = useSelectMachineFromContext();

          return (
            <Link as="div">
              <Flexbox container alignItems="center" gutter={1}>
                <Flexbox item container alignItems="center">
                  <OldIcon.AddWithCircle inline color={(t) => t.color.text} size={3} />
                </Flexbox>
                <Flexbox item>
                  <Typography type="tertiary" color={(t) => t.color.text}>
                    {state.context.placeholder}
                  </Typography>
                </Flexbox>
              </Flexbox>
            </Link>
          );
        },
      }),
      [],
    );

    const [value, setValue] = useState([]);
    // Don't mind the counter
    // just to have persistent unique keys
    const counter = createCounter();
    const hugeOptionsList = useMemo(
      () =>
        accountOptions
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          )
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          )
          .concat(
            accountOptions?.map((x) => ({
              ...x,
              value: x.value + counter.next(),
              label: x.label + counter.next(),
            })),
          ),
      [accountOptions], // eslint-disable-line react-hooks/exhaustive-deps
    );

    // @ts-ignore
    const handleChange = (newVal) => {
      action('change')(newVal);
      setValue(newVal);
    };

    return (
      <Flexbox container justifyContent="flex-end">
        <Input.Select
          options={hugeOptionsList}
          label="User account"
          id="input-select-search-inside"
          placeholder="Select account"
          noFormField
          showSearch
          multiselect
          value={value}
          width="300px"
          listPosition="left"
          listMaxHeight="400px"
          components={customComponents}
          onChange={handleChange}
          actions={[
            {
              label: 'Action',
              onSelect: action('Action triggered'),
            },
          ]}
        />
      </Flexbox>
    );
  });

export const onSearchQueryChange = () => (
  <Input.Select
    id="success-select"
    options={accountOptions}
    label="User account"
    success
    showSearch
    onSearchQueryChange={action('search query change')}
    placeholder="Select account"
  />
);

const placeholder = [{ label: '', value: null, disabled: true }];

export const onSearchQueryChangeWithoutOptions = () => (
  <Input.Select
    id="success-select"
    options={placeholder}
    label="User account"
    success
    showSearch
    hideDisabledOptions
    onSearchQueryChange={action('search query change')}
    placeholder="Select account"
  />
);

export const focusWithoutScrolling = () => (
  <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Input.Select
      id="no-scroll-select"
      options={accountOptions}
      label="User account"
      placeholder="Select account"
      preventScroll
    />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
);

export const insideModal = () => (
  <Modal open>
    <Input.Select
      id="no-scroll-select"
      options={accountOptions}
      label="User account"
      placeholder="Select account"
      fullscreenOnMobile
      withPortal
    />
  </Modal>
);

export const placementTop = () => (
  <Box pt={40}>
    <Input.Select
      id="no-scroll-select"
      options={accountOptions}
      label="User account"
      placeholder="Select account"
      placement="top"
    />
  </Box>
);

export const autoPlacement = () => (
  <>
    <h1>Open the Select and scroll down</h1>
    <div style={{ display: 'flex', alignItems: 'center', height: '160vh' }}>
      <Input.Select
        id="no-scroll-select"
        options={accountOptions}
        label="User account"
        placeholder="Select account"
        withPortal
      />
    </div>
  </>
);

export const GroupedOptions = () => {
  const [value, setValue] = useState([]);

  const options = [
    {
      label: 'Group 1',
      options: new Array(5).fill(null)?.map((_, i) => ({
        label: `Child 1 ${i}`,
        value: `c1-${i}`,
      })),
    },
    {
      label: 'Group 2',
      options: new Array(5).fill(null)?.map((_, i) => ({
        label: `Child 2 ${i}`,
        value: `c2-${i}`,
      })),
    },
  ];

  // selected -> group with selected
  const valueToSelected = (_value: any) =>
    options
      ?.map((option) => ({
        ...option,
        options: option.options.filter((child) =>
          _value.find((val: any) => val.value === child.value),
        ),
      }))
      .filter((option) => option.options.length);

  const handleChange = (newVal: any) => {
    action('change')(newVal);
    setValue(newVal);
  };

  return (
    <Input.Select
      id="grouped-options-single"
      options={options}
      label="Grouped options single"
      placeholder="Select option"
      value={valueToSelected(value)}
      onChange={handleChange}
    />
  );
};

export const GroupedOptionsMultiselect = () => {
  const options = [
    {
      label: 'Group 1',
      options: new Array(5).fill(null)?.map((_, i) => ({
        label: `Child 1 ${i}`,
        value: `c1-${i}`,
      })),
    },
    {
      label: 'Group 2',
      options: new Array(5).fill(null)?.map((_, i) => ({
        label: `Child 2 ${i}`,
        value: `c2-${i}`,
      })),
    },
  ];

  const CustomSelectedValue = () => {
    const [machineState] = useSelectMachineFromContext();
    const selectedCount = machineState.context.selectedItems.length;

    return (
      <FlexedBox px={2}>
        <Typography
          type="secondary"
          color={selectedCount === 0 ? (t) => t.color.placeholderText : undefined}
        >
          {selectedCount === 0 ? machineState.context.placeholder : `${selectedCount} selected`}
        </Typography>
      </FlexedBox>
    );
  };

  return (
    <Input.Select
      id="grouped-options-multiselect"
      options={options}
      label="Grouped options multiselect"
      placeholder="Select options"
      components={{ SelectedValue: CustomSelectedValue }}
      multiselect
    />
  );
};

export const GroupedOptionsMultiselectControlled = () => {
  const [value, setValue] = useState([]);
  const options = [
    {
      label: `Select All`,
      value: null,
      [Input.Select.SYMBOL_ALL]: true,
    },
    {
      label: 'Group 1',
      options: new Array(5).fill(null)?.map((_, i) => ({
        label: `Child 1 ${i}`,
        value: `c1-${i}`,
      })),
    },
    {
      label: 'Group 2',
      options: new Array(5).fill(null)?.map((_, i) => ({
        label: `Child 2 ${i}`,
        value: `c2-${i}`,
      })),
    },
  ];

  const CustomSelectedValue = () => {
    const [machineState] = useSelectMachineFromContext();
    const selectedCount = machineState.context.selectedItems.length;
    const allSelected = machineState.context.selectedItems.some((x) => x[Input.Select.SYMBOL_ALL]);

    const label = (() => {
      if (allSelected) {
        return 'All selected';
      }
      if (selectedCount === 0) {
        return machineState.context.placeholder;
      }
      return `${selectedCount} selected`;
    })();

    return (
      <FlexedBox px={2}>
        <Typography
          type="secondary"
          color={selectedCount === 0 ? (t) => t.color.placeholderText : undefined}
        >
          {label}
        </Typography>
      </FlexedBox>
    );
  };

  return (
    <Input.Select
      id="grouped-options-multiselect-test"
      options={options}
      value={value}
      // @ts-ignore
      onChange={setValue}
      components={{
        SelectedValue: CustomSelectedValue,
      }}
      multiselect
      label="User account"
      placeholder="Select account"
    />
  );
};

export const onAColouredBackground = () => (
  <Box p={5} backgroundColor={(t) => t.color.disabledBackground}>
    <Input.Select
      id="input-on-coloured-background"
      label="On a colored background"
      placeholder="Select an option"
      options={[
        { label: 'foo', value: 1 },
        { label: 'bar', value: 2 },
      ]}
    />
  </Box>
);

export const withoutSearchComponent = () => (
  <Box p={5} backgroundColor={(t) => t.color.disabledBackground}>
    <Input.Select
      id="input-without-a-search-component"
      label="Without search component"
      placeholder="Select an option"
      options={[
        { label: 'foo', value: 1 },
        { label: 'bar', value: 2 },
      ]}
      disableSearchComponent
    />
  </Box>
);

const CustomHeightTemplate: Story<Props> = (args) => (
  <Box p={5} backgroundColor={(t) => t.color.disabledBackground}>
    <CardWithTitle title="Setting a custom `height` overwrites the `size` prop">
      <Input.Select
        id="input-with-custom-height"
        options={[
          { value: 1, label: 'Strawberry 🍓' },
          { value: 2, label: 'Blueberry 🫐' },
          { value: 3, label: 'Banana 🍌' },
        ]}
        label="This is a tall input"
        placeholder="What's your favourite berry?"
        fullWidth
        height={args.height}
      />
    </CardWithTitle>
  </Box>
);

export const WithCustomHeight = CustomHeightTemplate.bind({});
WithCustomHeight.args = {
  height: 20,
};
