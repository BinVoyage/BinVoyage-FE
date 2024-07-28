import LocaitonSvg from 'assets/images/LocationSvg';
import styled from 'styled-components/native';
// import {useRequest} from 'hooks/useRequest';
import {useEffect, useRef, useState} from 'react';
import {Image, ImageBackground, View, TouchableOpacity} from 'react-native';
import {useRequest} from 'hooks/useRequest';
import Geolocation from '@react-native-community/geolocation';
import {mapStore} from 'store/Store';
import {WebView, WebViewMessageEvent} from 'react-native-webview';

type CoordProps = {
  children?: React.ReactNode;
  address?: any;
  onClick?: () => void;
};

// const coords: any = useRequest();

export default function Location({onClick, children}: CoordProps) {
  // const {setWebViewRef, setAddressList} = mapStore();
  // const webViewRef = useRef<WebView>(null);
  // useEffect(() => {
  //   setWebViewRef(webViewRef);
  // }, [webViewRef]);
  useEffect(() => {
    // const Ids: any | number | undefined = useRequest();
    let Ids: any;

    return () => {
      if (typeof Ids === 'number') {
        Geolocation.clearWatch(Ids);
      }
    };
  }, []);

  return (
    <TouchableOpacity>
      <Container>
        <Image source={require('../../assets/images/Location.png')} />
      </Container>
    </TouchableOpacity>
  );
}

export const Container = styled.View`
  position: 'absolute';
  margin-bottom: '40px';
  z-index: 1000;
  cursor: 'pointer';
  width: 40px;
  border-radius: 50px;
  background-color: #ffffff;
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  float: 'right';
  margin-left: 300px;
  margin-right: 16px;
  border: none;
  outline: none;
`;
