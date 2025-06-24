import React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import { Box } from '../Box';
import { AppText } from '../Text';
import type { RefView, TextBaseProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { TouchSingle } from '../Button';

export type AppHeaderProps = {
  title?: string;
  titleProps?: TextBaseProps;
  isBack?: boolean;
  backFunc?: () => void;
  bgColor?: string;
};
export interface AppHeaderRef extends RefView {}

export const AppHeader = React.memo(
  React.forwardRef<AppHeaderRef, AppHeaderProps>((props, ref) => {
    const {
      title,
      titleProps,
      isBack = true,
      backFunc = () => {},
      bgColor = '#0069F6',
    } = props;
    return (
      <Box
        row
        alignItems="flex-end"
        justifyContent="space-between"
        ref={ref}
        color={bgColor}
        height={Platform.select({ ios: 100, android: 90 })}
      >
        <SafeAreaView style={styles.safe}>
          <Box
            flex={1}
            row
            height={35}
            width={'90%'}
            marginLeft={12}
            alignItems="center"
            marginBottom={15}
          >
            {isBack ? (
              <TouchSingle
                onPress={() => backFunc()}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ marginRight: 10 }}
              >
                <BackIcon />
              </TouchSingle>
            ) : null}
            <AppText
              flex={1}
              size={20}
              color="#FFFFFF"
              weight="700"
              numberOfLines={1}
              {...titleProps}
            >
              {title}
            </AppText>
          </Box>
        </SafeAreaView>
      </Box>
    );
  })
);

const styles = StyleSheet.create({
  safe: {
    width: '70%',
    flexDirection: 'row',
    marginTop: 5,
  },
});

const BackIcon = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
