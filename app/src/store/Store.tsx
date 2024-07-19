import WebView from 'react-native-webview';
import {create} from 'zustand';

type userStore = {
  webViewRef: React.RefObject<WebView> | null;
  setWebViewRef: (ref: React.RefObject<WebView>) => void;
  addressList?: String[];
  setAddressList: (list: String[]) => void;
};

export const mapStore = create<userStore>(set => ({
  webViewRef: null,
  setWebViewRef: (ref: React.RefObject<WebView>) => set({webViewRef: ref}),
  setAddressList: (list: String[]) => set({addressList: list}),
}));
