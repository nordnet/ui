import React from 'react';
import { DrawerComponent } from './Drawer.types';
import { Media, Modal } from '../..';
import { Drawer } from './Drawer';

export const DrawerSwitch: DrawerComponent = props => {
  return (
    <>
      <Media query={t => t.media.lessThan(t.breakpoints.sm)}>
        <Modal {...props}>{props.children}</Modal>
      </Media>
      <Media query={t => t.media.greaterThan(t.breakpoints.sm)}>
        <Drawer {...props}>{props.children}</Drawer>
      </Media>
    </>
  );
};

DrawerSwitch.displayName = 'DrawerSwitch';
