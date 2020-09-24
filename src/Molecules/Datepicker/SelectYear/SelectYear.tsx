import React, { useMemo, useState } from 'react';
import { Props } from './SelectYear.types';
import { Box, Input, Flexbox, Icon, Typography } from '../../..';
import { newDate } from '../shared/dateUtils';

const SelectYear: React.FC<Props> = ({ now, onChange, years = 10 }) => {
  const [isHover, setIsHover] = useState(false);
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
        let icon = null;

        if ((state.value as any).open === 'on') {
          icon = <Icon.ChevronUp size={2} color={(t: any) => t.color.black} />;
        } else if (isHover) {
          icon = <Icon.ChevronDown size={2} color={(t: any) => t.color.cta} />;
        } else {
          icon = <Box px={1} />;
        }

        return (
          <Flexbox container>
            <Flexbox item>
              <Box pt={2} pr={2}>
                <Typography weight="bold">{now.getFullYear()}</Typography>
              </Box>
            </Flexbox>
            <Flexbox item>
              <Box pt={4} mr={2}>
                {icon}
              </Box>
            </Flexbox>
          </Flexbox>
        );
      },
    }),
    [now, isHover, useSelectMachineFromContext],
  );

  const selected = yearOptions.filter((p) => p.value === now.getFullYear());

  return (
    <div onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)}>
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
    </div>
  );
};

export default SelectYear;
