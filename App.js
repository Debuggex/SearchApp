import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import InsetShadow from 'react-native-inset-shadow';
import Input from './src/Screens/Input';
import Signup from './src/Screens/Signup';
import Navigation from './src/Screens/Navigation';

export default function App() {
  const {width} = Dimensions.get("window");
  const PADDING = 32;
  const size = width-PADDING*2;
  const x = PADDING;
  const y = 75;
  return (
    <Navigation/>
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
