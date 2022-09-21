import React from 'react';
import { Flexbox, Icon, VisuallyHidden } from '../..';
import { isNumber } from '../../common/utils';
import { Props, RatingComponent, IconSizeProp } from './Rating.types';

const restrictRange = (rating: Props['rating']) => {
  if (!isNumber(rating)) return 0;
  if (rating > 5) return 5;
  if (rating < 0) return 0;

  return rating;
};

export const getStarSize = (size: IconSizeProp) => {
  switch (size) {
    case 's':
    case 3:
      return 'StarFill12';
    case 'm':
    case 4:
      return 'StarFill16';
    case 'l':
    case 6:
      return 'StarFill24';
    case 'xl':
    case 8:
      return 'StarFill32';
    default:
      return 'StarFill16';
  }
};

export const Rating: RatingComponent = ({ rating = 0, size = 'm' }) => {
  const finalRating = restrictRange(rating);
  const screenReaderText = rating === 1 ? `${rating} star` : `${rating} stars`;
  const StarIcon = Icon[getStarSize(size)];

  return (
    <Flexbox container gap="2px">
      <VisuallyHidden>{screenReaderText}</VisuallyHidden>
      {[...Array(5)]?.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Flexbox item key={`${size}${index}`}>
          <StarIcon
            color={(t: any) => (index >= finalRating ? t.color.starRatingOff : t.color.starRating)}
          />
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Rating;
