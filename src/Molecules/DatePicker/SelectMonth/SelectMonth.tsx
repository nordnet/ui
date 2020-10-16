import React, { useMemo, useState } from 'react';
import format from 'date-fns/format';
import styled, { useTheme } from 'styled-components';
import { getLocale } from '../shared/dateUtils';
import { Props } from './SelectMonth.types';

/**
 * Imported seperately because when imported in src/index.ts, Input will not have been imported yet and error will be thrown
 */
import Input from '../../Input';
import { Box, Icon, Flexbox, Typography } from '../../..';
import { capitalize } from '../shared/textUtils';

const months = [...Array(12).keys()];

/* using styled like this as a workaround for 
 Select.test.tsx failing because Input.Select is undefined */
const StyledInputSelect = styled((props) => <Input.Select {...props} />)`
  margin-right: ${({ theme }) => theme.spacing.unit(3)}px;

  > div > div > div {
    margin-right: -22px;
    margin-top: -10px;
  }
`;

const SelectMonth: React.FC<Props> = ({ id, locale, viewedDate, onChange }) => {
  const [isHover, setIsHover] = useState(false);
  const opts = { locale: getLocale(locale) };
  const monthOptions = months.map((index: number) => ({
    value: index,
    label: capitalize(format(new Date(viewedDate.getFullYear(), index), 'MMMM', opts)),
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
        let icon = null;

        if ((state.value as any).open === 'on') {
          icon = <Icon.ChevronUp size={2} color={(t: any) => t.color.black} />;
        } else if (isHover) {
          icon = <Icon.ChevronDown size={2} color={(t: any) => t.color.cta} />;
        } else {
          icon = <Box px={1} />;
        }

        return (
          <Flexbox container data-testid="datepicker-select-month">
            <Flexbox item>
              <Box pr={1}>
                <Typography weight="bold">
                  {capitalize(format(viewedDate, 'MMMM', opts))}
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
    [viewedDate, opts, isHover, useSelectMachineFromContext],
  );

  const selected = monthOptions.filter((p) => p.value === viewedDate.getMonth());
  const theme = useTheme();

  return (
    <div onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)}>
      <StyledInputSelect
        label="Month"
        id={`${id}-select-month`}
        options={monthOptions}
        noFormField
        components={components}
        onChange={onChangeHandler}
        value={selected}
        listPosition="left"
        width={`${theme.spacing.unit(35)}px`}
      />
    </div>
  );
};

export default SelectMonth;
