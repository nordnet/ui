import React from 'react';
import { injectIntl } from 'react-intl';
import { Flexbox, Icon, VisuallyHidden } from '../..';
import { isNumber } from '../../common/utils';
import { Props, RatingComponent } from './Rating.types';
import messages from './Rating.messages';

const restrictRange = (rating: Props['rating']) => {
  if (!isNumber(rating)) return 0;
  if (rating > 5) return 5;
  if (rating < 0) return 0;

  return rating;
};

export const Rating: RatingComponent = ({ rating = 0, intl: { formatMessage } }) => {
  const finalRating = restrictRange(rating);
  return (
    <Flexbox container gutter={1}>
      <VisuallyHidden>{formatMessage(messages.rating, { rating: finalRating })}</VisuallyHidden>
      {[...Array(5)].map((_, index) => (
        <Icon.Star
          key={index} // eslint-disable-line react/no-array-index-key
          size={5}
          stroke={t => (index >= finalRating ? t.color.starRatingOff : t.color.starRating)}
          fill={t => (index >= finalRating ? t.color.starRatingOff : t.color.starRating)}
        />
      ))}
    </Flexbox>
  );
};

export default injectIntl(Rating);
