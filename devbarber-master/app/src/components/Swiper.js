import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default function SwiperComponent() {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={{
        backgroundColor: '#000',
        borderColor: '#000',
        borderWidth: 1,
        width: 10,
        height: 3,
        borderRadius: 10,
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        borderColor: '#000',
        borderWidth: 1,
        width: 10,
        height:10,
        borderRadius: 10,
      }}>
      <View style={styles.slide}>
        <Image
          source={require('../assets/Parceiro1.jpg')}
          style={{width: '80%', height: 200}}
        />
      </View>

      <View style={styles.slide}>
        <Image
          source={require('../assets/Parceiro2.jpg')}
          style={{width: '80%', height: 200}}
        />
      </View>

      <View style={styles.slide}>
        <Image
          source={require('../assets/Parceiro3.jpg')}
          style={{width: '80%', height: 200}}
        />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#63c2d1',
  },
});
