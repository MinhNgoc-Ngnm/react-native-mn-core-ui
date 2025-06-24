import {
  Box,
  AppText,
  AppButton,
  BottomSheetModalProvider,
  BottomSheetModal,
  AppBottomSheet,
  AppHeader,
} from 'react-native-mn-core-ui';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
export default function App() {
  // ref
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const bottomSheetModalRef2 = React.useRef<BottomSheetModal>(null);
  const bottomSheetModalRef3 = React.useRef<BottomSheetModal>(null);
  //

  return (
    <GestureHandlerRootView style={styles.flex}>
      <BottomSheetModalProvider>
        <AppHeader title="Trang chủ" />
        <Box flex={1} middle center>
          <AppText>AppText</AppText>
          <AppButton
            onPress={() => {
              bottomSheetModalRef.current?.present();
            }}
            title="Open Modal (View)"
          />
          <Box height={10} />
          <AppButton
            onPress={() => {
              bottomSheetModalRef2.current?.present();
            }}
            title="Open Modal (ScrollView)"
          />
          <Box height={10} />
          <AppButton
            onPress={() => {
              bottomSheetModalRef3.current?.present();
            }}
            title="Open Modal (Flatlist)"
          />
        </Box>
        <AppBottomSheet ref={bottomSheetModalRef} type="view">
          <AppText>Modal here 🎉</AppText>
          <AppText>Modal here 🎉</AppText>
          <AppText>Modal here 🎉</AppText>
          <AppText>Modal here 🎉</AppText>
          <AppText>Modal here 🎉</AppText>
          <AppText>Modal here 🎉</AppText>
          <AppText>Modal here 🎉</AppText>
          <AppText>Modal here 🎉</AppText>
        </AppBottomSheet>
        <AppBottomSheet ref={bottomSheetModalRef2} type="scroll">
          <Box height={1000}>
            <AppText>Modal here 🎉</AppText>
            <AppText>Modal here 🎉</AppText>
            <AppText>Modal here 🎉</AppText>
            <AppText>Modal here 🎉</AppText>
            <AppText>Modal here 🎉</AppText>
            <AppText>Modal here 🎉</AppText>
            <AppText>Modal here 🎉</AppText>
            <AppText>Modal here 🎉</AppText>
          </Box>
        </AppBottomSheet>
        <AppBottomSheet
          ref={bottomSheetModalRef3}
          type="flatlist"
          flatListProps={{
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            renderItem: ({ item }) => <AppText>{item}</AppText>,
          }}
        />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
