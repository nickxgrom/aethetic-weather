import {StyleSheet, View, Text, Image} from 'react-native';

export default function HourWeatherCard({hours, iconSource, temperature}) {
  return (
    <View style={styles.container}>
      <Text style={{...styles.fontDefaults, fontSize: 20}}>{hours}:00</Text>
      <Image style={styles.image} source={iconSource} />
      <Text style={styles.fontDefaults}>{temperature}°C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
  },
  fontDefaults: {
    color: '#fafafa',
    fontWeight: 'bold',
  },
  image: {
    width: 28,
    height: 28,
  },
});
