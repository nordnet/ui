import React, { useMemo } from 'react';
import { Props } from './SelectYear.types';
import { Box, Input, Flexbox, Icon, Typography } from '../../..';
import { newDate } from '../shared/dateUtils';

const SelectYear: React.FC<Props> = ({ now, onChange, years = 10 }) => {
  const today = newDate();
  const yearOptions = [...Array(years).keys()].map((index: number) => ({
    value: today.getFullYear() - index,
    label: (today.getFullYear() - index).toString(),
  }));

  const onChangeHandler = (selected: Array<any>) => {
    if (onChange) onChange(Number(selected[0].value));
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
                <Typography weight="bold">{now.getFullYear()}</Typography>
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
    [now, useSelectMachineFromContext],
  );

  const selected = yearOptions.filter((p) => p.value === now.getFullYear());

  return (
    <Input.Select
      label="Year"
      id="datepicker-selectyear"
      options={yearOptions}
      noFormField
      components={components}
      onChange={onChangeHandler}
      value={selected}
      listPosition="left"
    />
  );
};

export default SelectYear;
