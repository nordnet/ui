import React from 'react';
import styled from 'styled-components';
import R from 'ramda';

import { Props } from './Media.types';

const negateMedia = R.pipe(
  R.split(' '),
  R.insert(1, 'not all and'),
  R.join(' '),
);
// prettier-ignore
const StyledDiv = styled.div<{query: Props['query']}>`
    ${p => negateMedia(typeof p.query === 'string' ? p.query : p.query(p.theme))} {
        display: none;
    }
`
export const Media: React.FunctionComponent<Props> = props => <StyledDiv {...props} />;
