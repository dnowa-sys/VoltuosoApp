import React, { useState, useEffect } from 'react';
import { View, StyleSheet, PermissionsAndroid, Platform, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function MapScreen() {
  const [region, setRegion] = useState(null);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  useEffect(() => {
    const defaultRegion = {
      latitude: 38.9171,
      longitude: -77.0452,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    (async () => {
      const hasPermission = await requestLocationPermission();
      if (hasPermission) {
        Geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setRegion({
              latitude,
              longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            });
          },
          error => {
            console.error(error);
            setRegion(defaultRegion);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        setRegion(defaultRegion);
      }
    })();
  }, []);

  if (!region) {
    return <View style={styles.container}><Text>Loading map...</Text></View>;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{ latitude: 38.9171, longitude: -77.0452 }}
          title="Wyoming Ave Charging Station"
          description="$0.32/kWh — 11.5 kWh"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  map: {
    flex: 1,
  },
});
