import React from 'react';

import { storiesOf } from '@storybook/react';
import Text from '../../Atoms/Text';

storiesOf('Templates/Test', module).add('basic use', () => (
  <div>
    <div>
      <Text.Title1> Some header here</Text.Title1>
    </div>
    <div>
      <Text.Primary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim dui, rutrum ut ornare a,
        suscipit ut metus. Praesent ut est ac nisi pulvinar aliquam sit amet quis risus. Etiam at
        nulla elit. Donec ac eleifend lorem. Nam ut malesuada nunc. Fusce convallis lorem lacinia,
        venenatis nunc sed, commodo ante. Morbi nulla ipsum, hendrerit id diam eu, dictum malesuada
        nunc. Vestibulum gravida erat vitae dolor maximus interdum. Duis hendrerit purus ac magna
        tempus, vel gravida lorem semper. Nunc in lacus erat.
      </Text.Primary>
    </div>
    <div>
      <Text.Title3>Lorem ipsum dolor sit amet,</Text.Title3>
    </div>
  </div>
));
