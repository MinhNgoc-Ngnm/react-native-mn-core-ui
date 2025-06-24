// import type { ViewStyle } from 'react-native';
import type { MarginProps } from '../types';
import { calculateValue, removeUndefined } from './other';

export const calculateMargin: (p: MarginProps) => any = (props) => {
  const { margin, ...rest } = props;
  return {
    ...calculateValue(margin, 'margin'),
    ...removeUndefined<Omit<MarginProps, 'margin'>>(rest),
  };
};
