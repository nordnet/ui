import React, { useMemo, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Props } from './SelectYear.types';
/**
 * Imported seperately because when imported in src/index.ts, Input will not have been imported yet and error will be thrown
 */
import Input from '../../Input';
import { Box, Flexbox, Icon, Typography } from '../../..';
import { newDate } from '../shared/dateUtils';

/* using styled like this as a workaround for 
 Select.test.tsx failing because Input.Select is undefined */
const StyledInputSelect = styled((props) => <Input.Select {...props} />)`
  > div > div > div {
    margin-right: -22px;
    margin-top: -10px;
  }
`;

const SelectYear: React.FC<Props> = ({ id, viewedDate, onChange, years = 10 }) => {
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
          <Flexbox container data-testid="datepicker-select-year">
            <Flexbox item>
              <Box pr={1}>
                <Typography weight="bold">{viewedDate.getFullYear()}</Typography>
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
    [viewedDate, isHover, useSelectMachineFromContext],
  );

  const selected = yearOptions.filter((p) => p.value === viewedDate.getFullYear());
  const theme = useTheme();

  return (
    <div onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)}>
      <StyledInputSelect
        label="Year"
        id={`${id}-select-year`}
        options={yearOptions}
        noFormField
        components={components}
        onChange={onChangeHandler}
        value={selected}
        listPosition="left"
        width={`${theme.spacing.unit(25)}px`}
      />
    </div>
  );
};

export default SelectYear;
