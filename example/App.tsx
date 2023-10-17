import { StyleSheet, Text, View } from 'react-native';

import * as Expo3nstarScanner from 'expo-3nstar-scanner';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Expo3nstarScanner.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
