import React, { useMemo, useState } from 'react';
import format from 'date-fns/format';
import styled, { useTheme } from 'styled-components';
import { getLocale } from '../../dateUtils';
import { Props } from './SelectMonth.types';

/**
 * Imported separately because when imported in src/index.ts, Input will not have been imported yet and error will be thrown
 */
import Input from '../../../../Input';
import { Box, Flexbox, Icon, Typography } from '../../../../..';
import { capitalize } from '../../textUtils';
import { Theme } from '../../../../../theme/theme.types';

const months = [...Array(12).keys()];

/* using styled like this as a workaround for
 Select.test.tsx failing because Input.Select is undefined */
const StyledInputSelect = styled((props: React.ComponentProps<typeof Input.Select>) => (
  <Input.Select {...props} />
))`
  margin-right: ${({ theme }) => theme.spacing.unit(3)}px;

  > div > div > div {
    margin-right: -22px;
    margin-top: -10px;
  }
`;

const SelectMonth: React.FC<Props> = ({
  id,
  locale,
  viewedDate,
  onChange,
  fullscreenMode,
  selectMonthLabel = 'Month',
}) => {
  const [isHover, setIsHover] = useState(false);
  const monthOptions = months?.map((index: number) => ({
    value: index,
    label: capitalize(
      format(new Date(viewedDate.getFullYear(), index), 'MMMM', { locale: getLocale(locale) }),
    ),
  }));

  const onChangeHandler = (selected: Array<any>) => {
    if (onChange) onChange(selected[0].value);
  };

  const { useSelectMachineFromContext } = Input.Select;

  const components = useMemo(
    () => ({
      // eslint-disable-next-line react/no-unstable-nested-components
      SelectedValue: () => {
        const [state] = useSelectMachineFromContext();
        let icon = null;

        if ((state.value as any).open === 'on') {
          icon = <Icon.ChevronUp8 color={(t: Theme) => t.colorTokens.neutral.icon_default} />;
        } else if (isHover || fullscreenMode) {
          icon = (
            <Icon.ChevronDown8 color={(t: Theme) => t.colorTokens.action.background_default} />
          );
        } else {
          icon = <Box px={1} />;
        }

        return (
          <Flexbox container data-testid="datepicker-select-month">
            <Flexbox item>
              <Box pr={1}>
                <Typography type="primary" weight="semibold">
                  {capitalize(format(viewedDate, 'MMMM', { locale: getLocale(locale) }))}
                </Typography>
              </Box>
            </Flexbox>
            <Flexbox item>
              <Box pt={2} mr={1}>
                {icon}
              </Box>
            </Flexbox>
          </Flexbox>
        );
      },
    }),
    [useSelectMachineFromContext, isHover, fullscreenMode, viewedDate, locale],
  );

  const selected = monthOptions.filter((p) => p.value === viewedDate.getMonth());
  const theme = useTheme();

  return (
    <div onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)}>
      <StyledInputSelect
        label={selectMonthLabel}
        id={`${id}-select-month`}
        options={monthOptions}
        noFormField
        components={components}
        onChange={onChangeHandler}
        value={selected}
        listPosition="left"
        width={`${theme.spacing.unit(35)}px`}
        fullscreenOnMobile={fullscreenMode}
      />
    </div>
  );
};

export default SelectMonth;
