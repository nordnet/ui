import React from 'react';
import { Props } from './Header.types';
import { Box, Flexbox, Link, Icon } from '../../..';
import SelectMonth from '../SelectMonth';
import SelectYear from '../SelectYear';

const Header: React.FC<Props> = ({ locale, now, onMonthChange, onYearChange }) => {
  return (
    <>
      <Flexbox container justifyContent="space-between">
        <Flexbox item>
          <Box pt={3}>
            <Link
              onClick={() => {
                onMonthChange(now.getMonth() - 1);
              }}
            >
              <Icon.ChevronLeft size={4} />
            </Link>
          </Box>
        </Flexbox>
        <Flexbox container>
          <Flexbox item>
            <SelectMonth locale={locale} now={now} onChange={onMonthChange} />
          </Flexbox>
          <Flexbox item>
            <SelectYear locale={locale} now={now} onChange={onYearChange} />
          </Flexbox>
        </Flexbox>
        <Flexbox item>
          <Box pt={3}>
            <Link
              onClick={() => {
                onMonthChange(now.getMonth() + 1);
              }}
            >
              <Icon.ChevronRight size={4} />
            </Link>
          </Box>
        </Flexbox>
      </Flexbox>
    </>
  );
};

export default Header;
