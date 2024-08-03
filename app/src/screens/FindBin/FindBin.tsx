import {Text, View, Alert, Platform, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import {useEffect, useRef, useState} from 'react';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import * as S from 'screens/FindBin/FindBin.style';
import LocationSvg from 'assets/images/LocationSvg';
import {Palette} from 'constants/palette';
import RecyclingFilterSvg from 'assets/images/RecyclingFilterSvg';
import TrashFilterSvg from 'assets/images/TrashFilterSvg';
import {Image} from 'react-native';

export default function FindBin() {
  const webViewRef = useRef<WebView>(null);
  const [filterMode, setFilterMode] = useState<number>(-1);
  const [currentAddress, setCurrentAddress] = useState<string>('');
  const [watcherId, setWatcherId] = useState<number | null>(null); // Watcher ID를 저장할 상태
  const [isWebViewLoaded, setIsWebViewLoaded] = useState(false); // WebView 로드 상태

  const URL = 'http://localhost:5173';

  const requestPermissionAndSendLocation = async () => {
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

          console.log('Sending message:', JSON.stringify(message)); // 메시지 전송 확인

          if (isWebViewLoaded && webViewRef.current) {
            setTimeout(() => {
              // 지연을 주고 메시지 전송
              webViewRef.current?.postMessage(JSON.stringify(message));
            }, 500); // 0.5초 지연
          }
        },
        error => {
          console.log(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 10},
      );
      setWatcherId(Ids); // Watcher ID를 상태로 저장
    } else {
      Alert.alert('위치 권한이 필요합니다!', '위치 권한을 켜주세요!', [
        {
          text: 'OK',
          onPress: () => requestPermissionAndSendLocation(),
        },
      ]);
    }
  };

  useEffect(() => {
    if (isWebViewLoaded) {
      requestPermissionAndSendLocation(); // WebView가 로드된 후에 위치 권한 요청 및 위치 정보 전송을 시작
    }

    return () => {
      if (watcherId !== null) {
        Geolocation.clearWatch(watcherId); // 컴포넌트 언마운트 시 위치 감시 중지
      }
    };
  }, [isWebViewLoaded]);

  const refreshLocationWatching = () => {
    // 기존의 위치 감시 중지
    if (watcherId !== null) {
      Geolocation.clearWatch(watcherId);
    }
    // 새로 위치 감시 시작
    requestPermissionAndSendLocation();
  };

  const handleMessage = (e: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(e.nativeEvent.data);
      if (data.type === 'address') {
        setCurrentAddress(data.payload.address);
      }
    } catch (err) {
      console.log('error');
    }
  };

  const sendMessageToWebView = (mode: number) => {
    if (webViewRef.current) {
      const message = {
        type: 'filter',
        payload: {
          filterMode: mode,
        },
      };

      // 메시지가 잘 전송되었는지 확인하기 위한 로그
      // console.log('Sending message to WebView:', JSON.stringify(message));

      webViewRef.current.postMessage(JSON.stringify(message));
    } else {
      // WebView ref가 null일 때의 로그
      console.log('WebView reference is null, message not sent.');
    }
  };

  const handleFilter = (mode: number) => {
    if (filterMode === mode) {
      setFilterMode(-1);
      sendMessageToWebView(-1);
      return;
    }
    setFilterMode(mode);
    sendMessageToWebView(mode);
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        style={styles.webview}
        source={{uri: URL}}
        javaScriptEnabled={true}
        onMessage={handleMessage}
        onLoad={() => {
          console.log('WebView loaded');
          setIsWebViewLoaded(true); // WebView 로드 상태를 true로 설정
        }}
      />
      <S.ItemWrapper>
        <S.LocationWrapper>
          <LocationSvg width="24" height="24" fill={Palette.Primary} />
          <S.LocationText>{currentAddress || 'loading...'}</S.LocationText>
        </S.LocationWrapper>
        <S.RowWrapper>
          <S.FilterWrapperNoIcon onPress={() => handleFilter(0)} isSelected={filterMode === 0} isTrash={false}>
            <S.FilterText isSelected={filterMode === 0}>Recently visited</S.FilterText>
          </S.FilterWrapperNoIcon>
          <S.FilterWrapper onPress={() => handleFilter(2)} isSelected={filterMode === 2} isTrash={false}>
            <RecyclingFilterSvg width="26" height="26" fill={Palette.Primary} />
            <S.FilterText isSelected={filterMode === 2}>Recycling</S.FilterText>
          </S.FilterWrapper>
          <S.FilterWrapper onPress={() => handleFilter(1)} isSelected={filterMode === 1} isTrash={true}>
            <TrashFilterSvg width="26" height="26" fill={Palette.Secondary2} />
            <S.FilterText isSelected={filterMode === 1}>Trash</S.FilterText>
          </S.FilterWrapper>
        </S.RowWrapper>
      </S.ItemWrapper>
      <S.RefreshWrapper onPress={refreshLocationWatching}>
        <Image source={require('assets/images/icon-refresh.png')} style={{width: 60, height: 60}} />
      </S.RefreshWrapper>
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