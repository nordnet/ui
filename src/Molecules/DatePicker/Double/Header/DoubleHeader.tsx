import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { addMonths, subMonths } from 'date-fns';
import { Props } from './DoubleHeader.types';
import { Box, Flexbox, Icon, Button } from '../../../..';
import { getLocale } from '../../shared/dateUtils';
import SelectMonth from '../../shared/components/SelectMonth';
import SelectYear from '../../shared/components/SelectYear';

const YearMonthContainer = styled(Flexbox)`
  width: ${({ theme }) => theme.spacing.unit(76)}px;
`;

const ChevronContainer = styled(Box)<{ $align: 'left' | 'right' }>`
  position: absolute;
  ${({ $align, theme }) => `${$align}: ${theme.spacing.unit(2)}px;`}
`;

const DoubleHeader: React.FC<Props> = ({
  ariaLabelPrevious = '{date}',
  ariaLabelNext = '{date}',
  id,
  locale,
  viewedDate,
  onMonthChange,
  onYearChange,
  yearSelectLength,
  selectMonthLabel,
  selectYearLabel,
}) => {
  const opts = {
    locale: getLocale(locale),
  };

  const leftViewedDate = viewedDate;
  const rightViewedDate = addMonths(leftViewedDate, 1);

  const ariaLabelPreviousText = ariaLabelPrevious.replace(
    '{date}',
    format(subMonths(viewedDate, 1), 'MMMM yyyy', opts),
  );

  const ariaLabelNextText = ariaLabelNext.replace(
    '{date}',
    format(addMonths(viewedDate, 1), 'MMMM yyyy', opts),
  );

  return (
    <Flexbox container justifyContent="space-between">
      <YearMonthContainer container justifyContent="center" flex="1">
        <ChevronContainer mt={1} $align="left">
          <Button
            variant="neutral"
            aria-label={ariaLabelPreviousText}
            data-testid="datepicker-arrow-left"
            onClick={() => {
              onMonthChange(viewedDate.getMonth() - 1);
            }}
          >
            <Icon.ChevronLeft16 />
          </Button>
        </ChevronContainer>
        <Flexbox container item>
          <SelectMonth
            id={`${id}-left`}
            locale={locale}
            viewedDate={leftViewedDate}
            onChange={onMonthChange}
            selectMonthLabel={selectMonthLabel}
          />
          <SelectYear
            id={`${id}-left`}
            locale={locale}
            viewedDate={leftViewedDate}
            years={yearSelectLength}
            onChange={onYearChange}
            selectYearLabel={selectYearLabel}
          />
        </Flexbox>
      </YearMonthContainer>

      <YearMonthContainer container justifyContent="center" flex="1">
        <Flexbox container item>
          <SelectMonth
            id={`${id}-right`}
            locale={locale}
            viewedDate={rightViewedDate}
            onChange={onMonthChange}
            selectMonthLabel={selectMonthLabel}
          />
          <SelectYear
            id={`${id}-right`}
            locale={locale}
            viewedDate={rightViewedDate}
            years={yearSelectLength}
            onChange={onYearChange}
            selectYearLabel={selectYearLabel}
          />
        </Flexbox>
        <ChevronContainer $align="right" mt={1}>
          <Button
            variant="neutral"
            aria-label={ariaLabelNextText}
            data-testid="datepicker-arrow-right"
            onClick={() => {
              onMonthChange(viewedDate.getMonth() + 1);
            }}
          >
            <Icon.ChevronRight16 />
          </Button>
        </ChevronContainer>
      </YearMonthContainer>
    </Flexbox>
  );
};

export default DoubleHeader;
