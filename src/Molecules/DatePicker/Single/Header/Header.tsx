import React from 'react';
import format from 'date-fns/format';
import sub from 'date-fns/sub';
import add from 'date-fns/add';
import { Props } from './Header.types';
import { Box, Button, Flexbox, OldIcon } from '../../../..';
import { getLocale } from '../../shared/dateUtils';
import SelectMonth from '../../shared/components/SelectMonth';
import SelectYear from '../../shared/components/SelectYear';

const Header: React.FC<Props> = ({
  ariaLabelPrevious = '{date}',
  ariaLabelNext = '{date}',
  id,
  locale,
  viewedDate,
  onMonthChange,
  onYearChange,
  yearSelectLength,
  fullscreenMode,
  selectMonthLabel,
  selectYearLabel,
}) => {
  const opts = {
    locale: getLocale(locale),
  };

  const ariaLabelPreviousText = ariaLabelPrevious.replace(
    '{date}',
    format(sub(viewedDate || new Date(), { months: 1 }), 'MMMM yyyy', opts),
  );

  const ariaLabelNextText = ariaLabelNext.replace(
    '{date}',
    format(add(viewedDate || new Date(), { months: 1 }), 'MMMM yyyy', opts),
  );

  return (
    <Box pb={1}>
      <Flexbox container justifyContent="space-between">
        <Flexbox item>
          <Box mt={1}>
            <Button
              variant="neutral"
              aria-label={ariaLabelPreviousText}
              data-testid="datepicker-arrow-left"
              onClick={() => {
                onMonthChange(viewedDate.getMonth() - 1);
              }}
            >
              <OldIcon.ThinChevron size={4} direction="left" />
            </Button>
          </Box>
        </Flexbox>
        <Flexbox container>
          <Flexbox item>
            <SelectMonth
              id={id}
              locale={locale}
              viewedDate={viewedDate}
              onChange={onMonthChange}
              fullscreenMode={fullscreenMode}
              selectMonthLabel={selectMonthLabel}
            />
          </Flexbox>
          <Flexbox item>
            <SelectYear
              id={id}
              locale={locale}
              viewedDate={viewedDate}
              years={yearSelectLength}
              onChange={onYearChange}
              fullscreenMode={fullscreenMode}
              selectYearLabel={selectYearLabel}
            />
          </Flexbox>
        </Flexbox>
        <Flexbox item>
          <Box mt={1}>
            <Button
              variant="neutral"
              aria-label={ariaLabelNextText}
              data-testid="datepicker-arrow-right"
              onClick={() => {
                onMonthChange(viewedDate.getMonth() + 1);
              }}
            >
              <OldIcon.ThinChevron size={4} direction="right" />
            </Button>
          </Box>
        </Flexbox>
      </Flexbox>
    </Box>
  );
};

export default Header;
