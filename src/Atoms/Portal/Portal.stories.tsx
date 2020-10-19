import React, { useRef, useState, useEffect } from 'react';
import { Typography, Portal } from '../..';

export default {
  title: 'Atoms / Portal',
  parameters: {
    component: Portal,
  },
};

export const defaultStory = () => (
  <Portal>
    <Typography type="primary" as="p">
      This element is moved to the bottom of the body tag
    </Typography>
  </Portal>
);

defaultStory.story = {
  name: 'Default',
};

export const portalToSpecifiedDestination = () => {
  const ControlledExample = () => {
    const destination = useRef(null);
    const [renderPortal, setShouldRenderPortal] = useState(false);

    useEffect(() => {
      if (destination && destination.current) {
        setShouldRenderPortal(true);
      }
    }, [destination]);

    return (
      <>
        <div id="destination" ref={destination} />
        {renderPortal && (
          <div id="origin">
            <Portal attachTo={destination.current}>
              <Typography type="primary" as="p">
                This element is moved to a specified HTMLElement
              </Typography>
            </Portal>
          </div>
        )}
      </>
    );
  };
  return <ControlledExample />;
};

portalToSpecifiedDestination.story = {
  name: 'Portal to specified destination',
};

export const ifAttachToPropIsNotAHtmlElementThenNothingIsRendered = () => {
  const ControlledExample = () => {
    const destination = useRef(null);

    return (
      <div id="origin">
        <Portal attachTo={destination.current}>
          <Typography type="primary" as="p">
            This element should not be rendered
          </Typography>
        </Portal>
      </div>
    );
  };
  return <ControlledExample />;
};

ifAttachToPropIsNotAHtmlElementThenNothingIsRendered.story = {
  name: 'If attachTo prop is not a HTMLElement then nothing is rendered',
};
