import React from 'react';
import { number, withKnobs } from '@storybook/addon-knobs';
import docs from './Rating.mdx';
import Rating from '.';

export default {
  title: 'Molecules | Rating',
  parameters: {
    ...docs.parameters,
  },
  decorators: [withKnobs],
};

const getRatingProps = ({ rating = 0 } = {}) => ({
  rating: number('Rating', rating),
});

export const Rating0 = () => <Rating {...getRatingProps({ rating: 0 })} />;
export const Rating1 = () => <Rating {...getRatingProps({ rating: 1 })} />;
export const Rating5 = () => <Rating {...getRatingProps({ rating: 5 })} />;
export const RatingNotDefined = () => <Rating {...getRatingProps({ rating: undefined })} />;
