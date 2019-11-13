/** eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { action } from '@storybook/addon-actions';
import R from 'ramda';
import styled from 'styled-components';
import {
  Input,
  Avatar,
  Flexbox,
  Number,
  Typography,
  Box,
  Icon,
  Link,
  TrackingContext,
} from '../../..';
import { Display } from '../../../common/Display';
import mdx from './Select.mdx';

/* eslint-disable react-hooks/rules-of-hooks */
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
            <Avatar size="s">{selectedOption.symbol}</Avatar>
          </Flexbox>
          <Flexbox item container alignItems="center" grow={1}>
            <Typography type="tertiary" weight="bold" color={t => t.color.text}>
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

// @ts-ignore
const StyledBox = styled(Box)`
  cursor: pointer;
  background: ${p =>
    // @ts-ignore
    p.focused ? p.theme.color.background : p.theme.color.card};
  ${p =>
    // @ts-ignore
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
    // @ts-ignore
    <StyledBox px={2} py={1} focused={focused} isKeyboardNavigation={isKeyboardNavigation}>
      <Flexbox container justifyContent="space-between" gutter={4}>
        <Flexbox item container alignItems="center" basis="32px" grow={0}>
          <Avatar size="s">{option.symbol}</Avatar>
        </Flexbox>
        <Flexbox item container direction="column" grow={1}>
          <Flexbox item>
            <Typography type="tertiary" weight="bold" color={t => t.color.text}>
              {option.label}
            </Typography>
            <Typography type="tertiary">
              <span aria-hidden="true">&nbsp;&#8231;&nbsp;</span>
              {option.accno}
            </Typography>
          </Flexbox>
          <Flexbox item>
            <Typography type="caption" color={t => t.color.text}>
              <Number value={option.amount.value} currency={option.amount.currency} />
            </Typography>
          </Flexbox>
        </Flexbox>
        {selected && (
          <Flexbox item container alignItems="center">
            <Box pl={2}>
              <Icon.CheckMark color={t => t.color.cta} size={4} />
            </Box>
          </Flexbox>
        )}
      </Flexbox>
    </StyledBox>
  );
};

export const defaultStory = () => (
  <Input.Select
    id="input-1"
    options={[{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }]}
    label="Label"
    placeholder="Placeholder"
  />
);

export const hideLabel = () => (
  <Input.Select
    id="input-1"
    options={[{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }]}
    label="Label"
    hideLabel
    placeholder="Placeholder"
  />
);
export const overflowStory = () => (
  <Input.Select
    id="input-1"
    options={new Array(100).fill(null).map((_, i) => ({
      value: i,
      label: `${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}`,
    }))}
    label="LabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabel"
    placeholder="PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder"
  />
);

export const preselectedOptions = () =>
  React.createElement(() => {
    // This component you need to redefine for your particular case
    // Consider translations and a11y!
    const CustomSelectedValue = React.useCallback(() => {
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

    const [values, setValues] = React.useState([
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
  React.createElement(() => {
    // This component you need to redefine for your particular case
    // Consider translations and a11y!
    const CustomSelectedValue = React.useCallback(() => {
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
      options={[{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }]}
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
      options={[{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }]}
      label="Label"
      placeholder="Placeholder"
    />
    <Input.Select
      id="input-2"
      options={[{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }]}
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
      options={accountOptions.map((acc, i) =>
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
  React.createElement(() => {
    const [value, setValue] = React.useState([]);
    return (
      <Input.Select
        id="custom-renderers-select"
        options={accountOptions}
        value={value}
        // @ts-ignore
        onChange={setValue}
        actions={[
          {
            icon: <Icon.AddWithCircle size={4} color="currentColor" />,
            label: 'Add more stuff to dropdown',
            onSelect: action('Action triggered!'),
          },
          {
            icon: <Icon.Archive size={4} color="currentColor" />,
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
  React.createElement(() => {
    const [value, setValue] = React.useState([]);
    return (
      <Input.Select
        id="custom-renderers-select"
        options={[]}
        value={value}
        // @ts-ignore
        onChange={setValue}
        actions={[
          {
            icon: <Icon.AddWithCircle size={4} color="currentColor" />,
            label: 'Add more stuff to dropdown',
            onSelect: action('Action triggered!'),
          },
          {
            icon: <Icon.Archive size={4} color="currentColor" />,
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
  React.createElement(() => {
    const [value, setValue] = React.useState([]);
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
  React.createElement(() => {
    const [value, setValue] = React.useState([]);

    // This component you need to redefine for your particular case
    // Consider translations and a11y!
    const CustomSelectedValue = React.useMemo(
      () => () => {
        const [machineState] = useSelectMachineFromContext();
        const selectedCount = machineState.context.selectedItems.length;
        return (
          <FlexedBox px={2}>
            <Typography type="secondary">
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

export const multiselectActions = () =>
  React.createElement(() => {
    const [value, setValue] = React.useState([]);

    // This component you need to redefine for your particular case
    // Consider translations and a11y!
    const CustomSelectedValue = React.useMemo(
      () => () => {
        const [machineState] = useSelectMachineFromContext();
        const selectedCount = machineState.context.selectedItems.length;
        return (
          <FlexedBox px={2}>
            <Typography type="secondary">
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
            icon: <Icon.AddWithCircle size={4} color="currentColor" />,
            label: 'Add more stuff to dropdown',
            onSelect: action('Action add triggered!'),
          },
          {
            icon: <Icon.Archive size={4} color="currentColor" />,
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

const accountOptionsAndSelectAll = [
  {
    label: 'Select All',
    value: undefined,
    [Input.Select.SYMBOL_ALL]: true,
  },
]
  // @ts-ignore
  .concat(accountOptions)
  .concat({ label: 'Disabled', value: 'Doesnt matter', disabled: true });

export const multiselectSelectAll = () =>
  React.createElement(() => {
    const [value, setValue] = React.useState([]);

    // This component you need to redefine for your particular case
    // Consider translations and a11y!
    const CustomSelectedValue = React.useCallback(() => {
      const [machineState] = useSelectMachineFromContext();
      const selectedCount = machineState.context.selectedItems.length;
      const allSelected = machineState.context.selectedItems.some(x => x[Input.Select.SYMBOL_ALL]);
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
          <Typography type="secondary">{label}</Typography>
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

export const changesFromProps = () =>
  React.createElement(() => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [accs, setAccs] = React.useState(accountOptions);
    const [value, setValue] = React.useState([]);
    const [disabled, setDisabled] = React.useState(false);

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
  React.createElement(() => {
    const FORM_NAME = 'testForm';
    const SELECT_NAME = 'mySelect';

    // @ts-ignore
    const [_, forceUpdate] = React.useState([]); // eslint-disable-line @typescript-eslint/no-unused-vars

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
  React.createElement(() => {
    const [value, setValue] = React.useState(() => [accountOptions[1]]);
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

export const linkWithDropdownAndSearchBoxSecondary = () =>
  React.createElement(() => {
    const customComponents = React.useMemo(
      () => ({
        // @ts-ignore
        SelectedValue: () => {
          const [state] = useSelectMachineFromContext();

          return (
            <Link as="div">
              <Flexbox container alignItems="center" gutter={1}>
                <Flexbox item container alignItems="center">
                  <Icon.AddWithCircle inline color={t => t.color.text} size={3.5} />
                </Flexbox>
                <Flexbox item>
                  <Typography type="secondary" color={t => t.color.text}>
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

    const [value, setValue] = React.useState([]);
    const hugeOptionsList = React.useMemo(
      () =>
        accountOptions
          .concat(
            accountOptions.map(x => ({
              ...x,
              value: x.value + Math.random(),
              label: x.label + Math.random(),
            })),
          )
          .concat(
            accountOptions.map(x => ({
              ...x,
              value: x.value + Math.random(),
              label: x.label + Math.random(),
            })),
          )
          .concat(
            accountOptions.map(x => ({
              ...x,
              value: x.value + Math.random(),
              label: x.label + Math.random(),
            })),
          ),
      [accountOptions],
    );

    // @ts-ignore
    const handleChange = newVal => {
      action('change')(newVal);
      setValue(newVal);
    };

    return (
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
    );
  });

export const linkWithDropdownAndSearchBoxTertiary = () =>
  React.createElement(() => {
    const customComponents = React.useMemo(
      () => ({
        // @ts-ignore
        SelectedValue: () => {
          const [state] = useSelectMachineFromContext();

          return (
            <Link as="div">
              <Flexbox container alignItems="center" gutter={1}>
                <Flexbox item container alignItems="center">
                  <Icon.AddWithCircle inline color={t => t.color.text} size={3} />
                </Flexbox>
                <Flexbox item>
                  <Typography type="tertiary" color={t => t.color.text}>
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

    const [value, setValue] = React.useState([]);
    const hugeOptionsList = React.useMemo(
      () =>
        accountOptions
          .concat(
            accountOptions.map(x => ({
              ...x,
              value: x.value + Math.random(),
              label: x.label + Math.random(),
            })),
          )
          .concat(
            accountOptions.map(x => ({
              ...x,
              value: x.value + Math.random(),
              label: x.label + Math.random(),
            })),
          )
          .concat(
            accountOptions.map(x => ({
              ...x,
              value: x.value + Math.random(),
              label: x.label + Math.random(),
            })),
          ),
      [accountOptions],
    );

    // @ts-ignore
    const handleChange = newVal => {
      action('change')(newVal);
      setValue(newVal);
    };

    return (
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
    );
  });

export const linkWithDropdownAndSearchBoxMultiselect = () =>
  React.createElement(() => {
    const customComponents = React.useMemo(
      () => ({
        // @ts-ignore
        SelectedValue: () => {
          const [state] = useSelectMachineFromContext();

          return (
            <Link as="div">
              <Flexbox container alignItems="center" gutter={1}>
                <Flexbox item container alignItems="center">
                  <Icon.AddWithCircle inline color={t => t.color.text} size={3} />
                </Flexbox>
                <Flexbox item>
                  <Typography type="tertiary" color={t => t.color.text}>
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

    const [value, setValue] = React.useState([]);
    const hugeOptionsList = React.useMemo(
      () =>
        accountOptions
          .concat(
            accountOptions.map(x => ({
              ...x,
              value: x.value + Math.random(),
              label: x.label + Math.random(),
            })),
          )
          .concat(
            accountOptions.map(x => ({
              ...x,
              value: x.value + Math.random(),
              label: x.label + Math.random(),
            })),
          )
          .concat(
            accountOptions.map(x => ({
              ...x,
              value: x.value + Math.random(),
              label: x.label + Math.random(),
            })),
          ),
      [accountOptions],
    );

    // @ts-ignore
    const handleChange = newVal => {
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
      </TrackingContext.Provider>
    );
  });

export const listPositionedToTheLeft = () =>
  React.createElement(() => {
    const customComponents = React.useMemo(
      () => ({
        // @ts-ignore
        SelectedValue: () => {
          const [state] = useSelectMachineFromContext();

          return (
            <Link as="div">
              <Flexbox container alignItems="center" gutter={1}>
                <Flexbox item container alignItems="center">
                  <Icon.AddWithCircle inline color={t => t.color.text} size={3} />
                </Flexbox>
                <Flexbox item>
                  <Typography type="tertiary" color={t => t.color.text}>
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

    const [value, setValue] = React.useState([]);
    const hugeOptionsList = React.useMemo(
      () =>
        accountOptions
          .concat(
            accountOptions.map(x => ({
              ...x,
              value: x.value + Math.random(),
              label: x.label + Math.random(),
            })),
          )
          .concat(
            accountOptions.map(x => ({
              ...x,
              value: x.value + Math.random(),
              label: x.label + Math.random(),
            })),
          )
          .concat(
            accountOptions.map(x => ({
              ...x,
              value: x.value + Math.random(),
              label: x.label + Math.random(),
            })),
          ),
      [accountOptions],
    );

    // @ts-ignore
    const handleChange = newVal => {
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
export default {
  title: 'Molecules | Input / Select',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};
