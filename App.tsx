import React, {useState} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import BottomMenu from './components/BottomMenu';
import {getWeather} from './fetch/getWeather';

function App(): JSX.Element {
  const date = new Date();
  const [weekDay, month, monthDay] = date
    .toLocaleDateString('en', {
      weekday: 'long',
      month: 'long',
      day: '2-digit',
    })
    .split(/\s/);

  const [temperature, setTemperature] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);

  getWeather().then(res => {
    res.json().then(data => {
      setTemperature(data.current_weather.temperature);
      setWindSpeed(data.current_weather.windspeed);
    });
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require('./assets/bg.jpg')} />
        </View>
        <View style={styles.contentContainer}>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                alignSelf: 'center',
              }}>
              <Text style={styles.location}>Almaty, Kazakhstan</Text>

              <Image
                style={{width: 32, height: 32}}
                source={require('./assets/expand.png')}
              />
            </View>
            <Text style={styles.date}>
              {weekDay} {month} {monthDay}
            </Text>
          </View>
          <View>
            <Text style={styles.temperature}>{temperature}°C</Text>
            <View style={{...styles.flex, gap: 20, alignSelf: 'center'}}>
              <View style={{...styles.flex, gap: 8}}>
                <Image
                  style={{width: 36, height: 36}}
                  source={require('./assets/water-outline.png')}
                />
                <Text style={{color: '#fafafa', fontSize: 24}}>75%</Text>
              </View>
              <View style={{...styles.flex, gap: 8}}>
                <Image
                  style={{width: 36, height: 36}}
                  source={require('./assets/weather-windy.png')}
                />
                <Text style={{color: '#fafafa', fontSize: 24}}>
                  {windSpeed} km/h
                </Text>
              </View>
            </View>
            <Text
              style={{
                ...styles.fontColor_default,
                marginTop: 30,
                fontSize: 32,
                textAlign: 'center',
              }}>
              Rainy
            </Text>
            <BottomMenu />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontColor_default: {
    color: '#fafafa',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    height: '100%',
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  location: {
    fontSize: 32,
    color: '#fafafa',
    textAlign: 'center',
    fontWeight: '700',
  },
  expandBtn: {
    flex: 1,
    width: null,
    height: null,
  },
  date: {
    fontSize: 24,
    color: '#fafafa',
    textAlign: 'center',
  },
  temperature: {
    fontSize: 72,
    color: '#fafafa',
    textAlign: 'center',
  },
  imgContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  img: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default App;
