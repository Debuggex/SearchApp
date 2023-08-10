import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const InsetShadowExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.innerShadow} />
        <View style={styles.content}>
          <Text>Hello</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#F0F2F5',
    borderRadius: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  innerShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Shadow color
    transform: [{ rotate: '45deg' }],
    zIndex: -1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InsetShadowExample;
