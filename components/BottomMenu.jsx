import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import HourWeatherCard from './shared/HourWeatherCard';

export default function BottomMenu() {
  function handleWeeklyWeatherButton() {
    console.log('click');
  }

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.fontDefault}>Today</Text>
        </View>
        <View>
          <Pressable
            onPress={handleWeeklyWeatherButton}
            style={{...styles.flex, ...styles.justifyBetween}}>
            <Text style={styles.fontDefault}>
              Next 7 days
              <Image
                style={{width: 24, height: 24}}
                source={require('../assets/chevron-right.png')}
              />
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.weatherByHoursContainer}>
        {[13, 14, 15, 16, 17].map((item, index) => (
          <HourWeatherCard
            key={index}
            hours={item}
            iconSource={require('../assets/water-outline.png')}
            temperature={item + index * 0.8}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  justifyBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontDefault: {
    color: '#fafafa',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  horizontalLine: {
    borderBottomColor: '#fafafa',
    borderBottomWidth: 1,
  },
  weatherByHoursContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
