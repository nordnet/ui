import React, { useState } from 'react';
import { Drawer, Typography, Icon, Flexbox } from '../../index';

export default {
  title: 'Molecules | Drawer',
  parameters: {
    component: Drawer,
  },
};

const content = (
  <div>
    <Typography type="primary" as="p">
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
      sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </Typography>
    <Typography type="primary">
      <ul>
        <li>
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
          ultricies in, diam. Sed arcu. Cras consequat.
        </li>
        <li>
          Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna
          eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
          facilisis luctus, metus.
        </li>
        <li>
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
        </li>
        <li>
          Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut,
          elementum vulputate, nunc.
        </li>
      </ul>
    </Typography>
    <Typography type="primary" as="p">
      Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
      commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
      ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
      facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue,
      eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
      porttitor, facilisis luctus, metus
    </Typography>
  </div>
);

export const defaultStory = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <button type="button" onClick={toggle}>
          Toggle drawer
        </button>
        <Drawer onClose={onClose} title="Drawer title" open={open}>
          {content}
        </Drawer>
      </div>
    );
  };
  return <Example />;
};

defaultStory.story = {
  name: 'Default',
};

export const withCustomTitle = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <button type="button" onClick={toggle}>
          Toggle drawer
        </button>
        <Drawer
          onClose={onClose}
          title={
            <Flexbox container gutter={2} alignItems="center">
              <Icon.Bank />
              <Typography type="title2" as="h2">
                Custom title
              </Typography>
            </Flexbox>
          }
          open={open}
        >
          {content}
        </Drawer>
      </div>
    );
  };
  return <Example />;
};

withCustomTitle.story = {
  name: 'With a custom title',
};
