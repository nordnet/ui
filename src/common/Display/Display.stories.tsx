import MD from 'react-markdown';
import React from 'react';
import docs from './Display.md';
// Here is the only place where we import
// components not from top level index file
import { Display } from '.';

export default {
  title: 'Others / Display',
};

export const documentation = () => {
  return (
    <>
      <MD source={docs} />
      <Display
        items={[
          {
            title: 'Vertical layout',
            component: (
              <Display
                items={[
                  { title: 'Title 1', component: <div>Component 1</div> },
                  { title: 'Title 2', component: <div>Component 2</div> },
                  { title: 'Title 3', component: <div>Component 3</div> },
                ]}
              />
            ),
          },
          {
            title: 'Horizontal layout',
            component: (
              <Display
                horizontal
                items={[
                  { title: 'Title 1', component: <div>Component 1</div> },
                  { title: 'Title 2', component: <div>Component 2</div> },
                  { title: 'Title 3', component: <div>Component 3</div> },
                ]}
              />
            ),
          },
        ]}
      />
    </>
  );
};
