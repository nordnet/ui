import React, { useMemo, useState } from 'react';
import format from 'date-fns/format';
import styled from 'styled-components';
import { getLocale } from '../shared/dateUtils';
import { Props } from './SelectMonth.types';
import { Box, Input, Icon, Flexbox, Typography } from '../../..';

const months = [...Array(12).keys()];

const StyledInputSelect = styled(Input.Select)`
  margin-right: 12px;
`;

const SelectMonth: React.FC<Props> = ({ locale, now, onChange }) => {
  const [isHover, setIsHover] = useState(false);
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
              <Box pt={2} pr={1}>
                <Typography weight="bold">{format(now, 'MMMM', opts)}</Typography>
              </Box>
            </Flexbox>
            <Flexbox item>
              <Box pt={4} mr={1}>
                {icon}
              </Box>
            </Flexbox>
          </Flexbox>
        );
      },
    }),
    [now, opts, isHover, useSelectMachineFromContext],
  );

  const selected = monthOptions.filter((p) => p.value === now.getMonth());

  return (
    <div onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)}>
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
    </div>
  );
};

export default SelectMonth;
