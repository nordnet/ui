import React from 'react';
import { Props } from './Header.types';
import { Box, Flexbox, Link, Icon } from '../../..';
import SelectMonth from '../SelectMonth';
import SelectYear from '../SelectYear';

const Header: React.FC<Props> = ({ id, locale, now, onMonthChange, onYearChange }) => {
  return (
    <>
      <Flexbox container justifyContent="space-between">
        <Flexbox item>
          <Box pt={3}>
            <Link
              data-testid="datepicker-arrow-left"
              onClick={() => {
                onMonthChange(now.getMonth() - 1);
              }}
            >
              <Icon.ThinChevron size={4} direction="left" />
            </Link>
          </Box>
        </Flexbox>
        <Flexbox container>
          <Flexbox item>
            <SelectMonth id={id} locale={locale} now={now} onChange={onMonthChange} />
          </Flexbox>
          <Flexbox item>
            <SelectYear id={id} locale={locale} now={now} onChange={onYearChange} />
          </Flexbox>
        </Flexbox>
        <Flexbox item>
          <Box pt={3}>
            <Link
              data-testid="datepicker-arrow-right"
              onClick={() => {
                onMonthChange(now.getMonth() + 1);
              }}
            >
              <Icon.ThinChevron size={4} direction="right" />
            </Link>
          </Box>
        </Flexbox>
      </Flexbox>
    </>
  );
};

export default Header;
