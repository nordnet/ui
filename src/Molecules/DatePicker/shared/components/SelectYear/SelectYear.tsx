import React, { useMemo, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import add from 'date-fns/add';
import { Props } from './SelectYear.types';
/**
 * Imported separately because when imported in src/index.ts, Input will not have been imported yet and error will be thrown
 */
import Input from '../../../../Input';
import { Box, Flexbox, OldIcon, Typography } from '../../../../..';
import { newDate } from '../../dateUtils';
import { Theme } from '../../../../../theme/theme.types';

/* using styled like this as a workaround for
 Select.test.tsx failing because Input.Select is undefined */
const StyledInputSelect = styled((props: React.ComponentProps<typeof Input.Select>) => (
  <Input.Select {...props} />
))`
  > div > div > div {
    margin-right: -22px;
    margin-top: -10px;
  }
`;

const SelectYear: React.FC<Props> = ({
  id,
  viewedDate,
  onChange,
  years = 100,
  fullscreenMode,
  selectYearLabel = 'Year',
}) => {
  const [isHover, setIsHover] = useState(false);
  const futureDate = add(newDate(), { years: 10 });
  const yearOptions = [...Array(years).keys()]?.map((index: number) => ({
    value: futureDate.getFullYear() - index,
    label: (futureDate.getFullYear() - index).toString(),
  }));

  const onChangeHandler = (selected: Array<any>) => {
    if (onChange) onChange(Number(selected[0].value));
  };

  const { useSelectMachineFromContext } = Input.Select;

  const components = useMemo(
    () => ({
      SelectedValue: () => {
        const [state] = useSelectMachineFromContext();
        let icon = null;

        if ((state.value as any).open === 'on') {
          icon = <OldIcon.ChevronUp size={2} color={(t: Theme) => t.color.svgFill} />;
        } else if (isHover || fullscreenMode) {
          icon = <OldIcon.ChevronDown size={2} color={(t: Theme) => t.color.cta} />;
        } else {
          icon = <Box px={1} />;
        }

        return (
          <Flexbox container data-testid="datepicker-select-year">
            <Flexbox item>
              <Box pr={1}>
                <Typography type="primary" weight="semibold">
                  {viewedDate.getFullYear()}
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
    [useSelectMachineFromContext, isHover, fullscreenMode, viewedDate],
  );

  const selected = yearOptions.filter((p) => p.value === viewedDate.getFullYear());
  const theme = useTheme();

  return (
    <div onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)}>
      <StyledInputSelect
        label={selectYearLabel}
        id={`${id}-select-year`}
        options={yearOptions}
        noFormField
        components={components}
        onChange={onChangeHandler}
        value={selected}
        listPosition="left"
        width={`${theme.spacing.unit(25)}px`}
        fullscreenOnMobile={fullscreenMode}
      />
    </div>
  );
};

export default SelectYear;
