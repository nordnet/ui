import React from 'react';
import { Flexbox, List, Media } from '../../../../..';
import { ExpandItemsComponent } from './ExpandItems.types';
import { ExpandItem } from './ExpandItem';

export const ExpandItems: ExpandItemsComponent = ({ items }) => {
  return (
    <>
      <Media query={(t) => t.media.lessThan(t.breakpoints.md)}>
        <List>
          {items?.map((item, index) => (
            <ExpandItem key={`expandItem_mobile_${index + 1}`} item={item} mobileItem />
          ))}
        </List>
      </Media>
      <Media query={(t) => t.media.greaterThan(t.breakpoints.md)}>
        <Flexbox container wrap="wrap" gutter={10} as={List}>
          {items?.map((item, index) => (
            <ExpandItem key={`expandItem_desktop_${index + 1}`} item={item} />
          ))}
        </Flexbox>
      </Media>
    </>
  );
};
