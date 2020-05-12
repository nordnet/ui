import { defineMessages } from 'react-intl';

// don't copy this behaviour, this should have been done differently
export default defineMessages({
  rating: {
    id: 'rating',
    defaultMessage: '{rating, number} {rating, plural, one {star} other {stars}}',
  },
});
