import React from 'react';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetScrollView,
  BottomSheetFlatList,
  BottomSheetBackdrop,
  type BottomSheetBackdropProps,
  type BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import type {
  BottomSheetFlatListProps,
  BottomSheetScrollViewProps,
} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/types';
import type { BottomSheetViewProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetView/types';
import type { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

export interface AppBottomSheetProps
  extends Omit<BottomSheetModalProps, 'children'> {
  type: 'view' | 'scroll' | 'flatlist';
  viewProps?: BottomSheetViewProps;
  scrollViewProps?: BottomSheetScrollViewProps;
  flatListProps?: BottomSheetFlatListProps<any>;
  children?: React.ReactNode | React.ReactNode[];
}

export interface AppBottomSheetRef extends BottomSheetModalMethods {}

export const AppBottomSheet = React.memo(
  React.forwardRef<AppBottomSheetRef, AppBottomSheetProps>((props, ref) => {
    const { backdropComponent } = props;
    const renderContent = React.useCallback(() => {
      switch (props.type) {
        case 'view':
          return (
            <BottomSheetView {...props.viewProps}>
              {props.children}
            </BottomSheetView>
          );
        case 'scroll':
          return (
            <BottomSheetScrollView {...props.scrollViewProps}>
              {props.children}
            </BottomSheetScrollView>
          );
        case 'flatlist':
          return (
            <BottomSheetFlatList
              {...props.flatListProps}
              data={props.flatListProps?.data ?? []}
              renderItem={props.flatListProps?.renderItem ?? (() => null)}
            />
          );
        default:
          return null;
      }
    }, [
      props.children,
      props.flatListProps,
      props.scrollViewProps,
      props.type,
      props.viewProps,
    ]);

    const DefaultBackdrop = React.useCallback((p: BottomSheetBackdropProps) => {
      return (
        <BottomSheetBackdrop {...p} appearsOnIndex={0} disappearsOnIndex={-1} />
      );
    }, []);
    return (
      <BottomSheetModal
        ref={ref}
        backdropComponent={backdropComponent || DefaultBackdrop}
      >
        {renderContent()}
      </BottomSheetModal>
    );
  })
);
