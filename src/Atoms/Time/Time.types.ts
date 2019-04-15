import { InjectedIntlProps } from 'react-intl';

export type Props = {
  decimals?: number;
  value?: number;
  invalidValue?: string;
};

export type TimeComponent = React.FunctionComponent<Props & InjectedIntlProps>;
