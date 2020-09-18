import React, { useMemo } from 'react';
import format from 'date-fns/format';
import styled from 'styled-components';
import { getLocale } from '../shared/dateUtils';
import { Props } from './SelectMonth.types';
import { Box, Input, Icon, Flexbox, Typography } from '../../..';

const months = [...Array(12).keys()];

const SelectMonth: React.FC<Props> = ({ locale, now, onChange }) => {
  const opts = { locale: getLocale(locale) };
  const monthOptions = months.map((index: number) => ({
    value: index,
    label: format(new Date(now.getFullYear(), index), 'MMMM', opts),
  }));

  const onChangeHandler = (selected: Array<any>) => {
    if (onChange) onChange(selected[0].value);
  };

  const { useSelectMachineFromContext } = Input.Select;

  const components = useMemo(
    () => ({
      // @ts-ignore
      SelectedValue: () => {
        const [state] = useSelectMachineFromContext();
        const open = (state.value as any).open === 'on';
        return (
          <Flexbox container>
            <Flexbox item>
              <Box pt={2} pr={2}>
                <Typography weight="bold">{format(now, 'MMMM', opts)}</Typography>
              </Box>
            </Flexbox>
            <Flexbox item>
              <Box pt={4} mr={2}>
                {open ? (
                  <Icon.ChevronDown size={2} color={(t: any) => t.color.cta} />
                ) : (
                  <Box px={1} />
                )}
              </Box>
            </Flexbox>
          </Flexbox>
        );
      },
    }),
    [now, opts, useSelectMachineFromContext],
  );

  const selected = monthOptions.filter((p) => p.value === now.getMonth());

  const StyledInputSelect = styled(Input.Select)`
    right: -15px;
  `;

  return (
    <StyledInputSelect
      label="Month"
      id="datepicker-selectmonth"
      options={monthOptions}
      noFormField
      components={components}
      onChange={onChangeHandler}
      value={selected}
      listPosition="left"
    />
  );
};

export default SelectMonth;
