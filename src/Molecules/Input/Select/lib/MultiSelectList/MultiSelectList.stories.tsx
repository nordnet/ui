import * as React from 'react';
import styled from 'styled-components';
import { Option } from './MultiSelectList';
import { Display } from '../../../../../common/Display';
import { DropdownBubble, FadedScroll } from '../../../../..';

export default {
  title: 'Molecules / Input / Select / MultiSelectList',
};

export const itemDefault = () => <Option value={0} label="First" />;

itemDefault.story = {
  name: 'Item default',
};

export const itemSelected = () => <Option value={0} label="First" selected />;

itemSelected.story = {
  name: 'Item selected',
};

export const itemDisabled = () => <Option value={0} label="First" disabled />;

itemDisabled.story = {
  name: 'Item disabled',
};

const DropdownBubbleWithPadding = styled(DropdownBubble)`
  padding-top: 12px;
  padding-bottom: 12px;
  width: 300px;
`;
// @ts-ignore
const Wrapper = (props) => (
  <DropdownBubbleWithPadding position={props.position} maxHeight="200px">
    <FadedScroll enableMobileFade>{props.children}</FadedScroll>
  </DropdownBubbleWithPadding>
);
export const listWithDifferentArrowPositions = () => (
  <Display
    items={[
      {
        component: (
          <Wrapper>
            <Option value={-1} label="Default?" />
            <Option value={0} label="First" selected />
            <Option
              value={2}
              label="SecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecond"
            />
            {new Array(10).fill(null).map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Option key={i} value={i + 3} label="Disabled" disabled />
            ))}
          </Wrapper>
        ),
        title: 'Default (right)',
      },

      {
        component: (
          <Wrapper position="left">
            <Option value={-1} label="Default?" />
            <Option value={0} label="First" selected />
            {new Array(10).fill(null).map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Option key={i} value={i + 2} label="Disabled" disabled />
            ))}
          </Wrapper>
        ),
        title: 'Left',
      },
      {
        component: (
          <Wrapper position="center">
            <Option value={-1} label="Default?" />
            <Option value={0} label="First" selected />
            <Option value={2} label="Second" />
            {new Array(10).fill(null).map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Option key={i} value={i + 3} label="Disabled" disabled />
            ))}
          </Wrapper>
        ),
        title: 'Center',
      },
    ]}
  />
);

listWithDifferentArrowPositions.story = {
  name: 'List with different arrow positions',
};
