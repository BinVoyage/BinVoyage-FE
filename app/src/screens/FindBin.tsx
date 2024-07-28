import {Text, View, Alert, Platform, StyleSheet} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import {useEffect, useId, useRef, useState} from 'react';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {mapStore} from 'store/Store';
import CurrentView from 'components/View/CurrentView';
import Filter from 'components/Filter';
import LocaitonSvg from 'assets/images/LocationSvg';
import Location from 'components/View/Locations';
import {useRequest} from 'hooks/useRequest';
import ArroundAddress from 'components/View/AroundAddress';

export default function FindBin() {
  const {setWebViewRef, setAddressList} = mapStore();
  const [save, setSave] = useState('');
  const [savecoord, setSavecoord] = useState<string | null | undefined | number | any>('');

  const webViewRef = useRef<WebView>(null);

  const URL = ' http://192.168.35.85:5173';

  // const URL = 'https://binvoyage-fe.netlify.app/';

  const requestPermission = async () => {
    let result;
    if (Platform.OS === 'android') {
      result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else if (Platform.OS === 'ios') {
      result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }
    if (result === RESULTS.GRANTED) {
      const Ids = Geolocation.watchPosition(
        position => {
          const {coords} = position;
          const message = {
            type: 'location',
            payload: {
              latitude: coords.latitude,
              longitude: coords.longitude,
            },
          };

          if (webViewRef.current) {
            webViewRef.current.postMessage(JSON.stringify(message));
          }
        },
        error => {
          console.log(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
      return Ids;
    } else {
      Alert.alert('위치 권한이 필요합니다!', '위치 권한을 켜주세요!', [
        {
          text: 'OK',
          onPress: () => requestPermission(),
        },
      ]);
    }
  };

  useEffect(() => {
    setWebViewRef(webViewRef);
  }, [webViewRef]);

  let r;

  useEffect(() => {
    const Ids = requestPermission();
    r = Ids;
    return () => {
      if (typeof Ids === 'number') {
        Geolocation.clearWatch(Ids);
      }
    };
  }, []);

  const handleMessage = (e: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(e.nativeEvent.data);
      if (data.type === 'address') {
        setAddressList(data.payload.addressList);
      } else if (data.type === 'save') {
        setSave(data.payload.save);
      }
    } catch (err) {
      console.log('error');
    }
  };

  return (
    <View style={styles.container}>
      <CurrentView children={save} />
      <Filter />
      <WebView ref={webViewRef} style={styles.webview} source={{uri: URL}} javaScriptEnabled={true} onMessage={handleMessage} />
      <Location onClick={r} />
      {/* <ArroundAddress /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  View: {
    flex: 1,
  },
});
