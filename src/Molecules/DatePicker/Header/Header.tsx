import React from 'react';
import format from 'date-fns/format';
import sub from 'date-fns/sub';
import add from 'date-fns/add';
import { Props } from './Header.types';
import { Box, Flexbox, Link, Icon } from '../../..';
import { getLocale } from '../shared/dateUtils';
import SelectMonth from '../SelectMonth';
import SelectYear from '../SelectYear';

const Header: React.FC<Props> = ({
  ariaLabelPrevious = 'Previous month {date}, button',
  ariaLabelNext = 'Next month {date}, button',
  id,
  locale,
  viewedDate,
  onMonthChange,
  onYearChange,
}) => {
  const opts = {
    locale: getLocale(locale),
  };

  const ariaLabelPreviousText = ariaLabelPrevious.replace(
    '{date}',
    format(sub(viewedDate, { months: 1 }), 'MMMM yyyy', opts),
  );

  const ariaLabelNextText = ariaLabelNext.replace(
    '{date}',
    format(add(viewedDate, { months: 1 }), 'MMMM yyyy', opts),
  );

  return (
    <Flexbox container justifyContent="space-between">
      <Flexbox item>
        <Box mt={1}>
          <Link
            aria-label={ariaLabelPreviousText}
            data-testid="datepicker-arrow-left"
            onClick={() => {
              onMonthChange(viewedDate.getMonth() - 1);
            }}
          >
            <Icon.ThinChevron size={4} direction="left" />
          </Link>
        </Box>
      </Flexbox>
      <Flexbox container>
        <Flexbox item>
          <SelectMonth id={id} locale={locale} viewedDate={viewedDate} onChange={onMonthChange} />
        </Flexbox>
        <Flexbox item>
          <SelectYear id={id} locale={locale} viewedDate={viewedDate} onChange={onYearChange} />
        </Flexbox>
      </Flexbox>
      <Flexbox item>
        <Box mt={1}>
          <Link
            aria-label={ariaLabelNextText}
            data-testid="datepicker-arrow-right"
            onClick={() => {
              onMonthChange(viewedDate.getMonth() + 1);
            }}
          >
            <Icon.ThinChevron size={4} direction="right" />
          </Link>
        </Box>
      </Flexbox>
    </Flexbox>
  );
};

export default Header;
