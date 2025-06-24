import React from 'react';
import type { TouchSingleProps } from './TouchSingle';
import { type TextBaseProps, type RefView } from '../types';
import TouchSingle from './TouchSingle';
import { AppText } from '../Text';

export interface AppButtonProps extends TouchSingleProps {
  title: string;
  titleProps?: TextBaseProps;
}
export interface AppButtonRef extends RefView {}

export const AppButton = React.memo(
  React.forwardRef<AppButtonRef, AppButtonProps>((props, ref) => {
    const { title, titleProps, ...p } = props;
    const defaultTitleProps: TextBaseProps = React.useMemo(
      () => ({
        textAlign: 'center',
        size: 16,
        weight: '700',
        color: '#FFF',
        radius: 8,
        backgroundColor: '#3079FF',
        padding: 8,
      }),
      []
    );
    return (
      <TouchSingle ref={ref} {...p}>
        <AppText {...defaultTitleProps} {...titleProps}>
          {title}
        </AppText>
      </TouchSingle>
    );
  })
);
