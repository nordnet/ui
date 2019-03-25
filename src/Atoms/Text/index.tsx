import React from 'react';
import { TextPlaceholder } from './Text.placeholder';
import { TextComponentInterface, Props } from './Text.types';

const Caption: React.FunctionComponent<Props> = props => <TextPlaceholder {...props} />;
Caption.displayName = 'Text.Caption';

const Hero: React.FunctionComponent<Props> = props => <TextPlaceholder {...props} />;
Hero.displayName = 'Text.Hero';

const Title1: React.FunctionComponent<Props> = props => <TextPlaceholder {...props} />;
Title1.displayName = 'Text.Title1';

const Title2: React.FunctionComponent<Props> = props => <TextPlaceholder {...props} />;
Title2.displayName = 'Text.Title2';

const Title3: React.FunctionComponent<Props> = props => <TextPlaceholder {...props} />;
Title3.displayName = 'Text.Title3';

const Primary: React.FunctionComponent<Props> = props => <TextPlaceholder {...props} />;
Primary.displayName = 'Text.Primary';

const Secondary: React.FunctionComponent<Props> = props => <TextPlaceholder {...props} />;
Secondary.displayName = 'Text.Secondary';

const Tertiary: React.FunctionComponent<Props> = props => <TextPlaceholder {...props} />;
Tertiary.displayName = 'Text.Tertiary';

const Text: TextComponentInterface = {
  Caption,
  Hero,
  Title1,
  Title2,
  Title3,
  Primary,
  Secondary,
  Tertiary,
};

export default Text;
