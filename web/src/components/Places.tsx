import { getData } from "../api/getcoord";

declare global {
    interface Window {
      kakao: any;
       latng: string | number;
       maps:any;
    }
  
  }

  type CurrentLocation = {
    latitude: number;
    longitude: number;
  };
  
  
export const trashpositions:any[] = [
    new window.kakao.maps.LatLng(37.54397760413326, 127.12560598299282),
    new window.kakao.maps.LatLng(37.5663174209601, 126.977829174031),
    new window.kakao.maps.LatLng(37.5674198878673, 126.977873671097),
    new window.kakao.maps.LatLng(37.5668837502225, 126.976702419575),
    new window.kakao.maps.LatLng(37.570889038138, 126.988250180457),
];


export const recyclepositions:any[] = [
    new window.kakao.maps.LatLng(37.544265748, 127.12577054318095),
    new window.kakao.maps.LatLng(37.5698677620456, 126.977657083792),
    new window.kakao.maps.LatLng(37.54397678904881, 127.12845751143172),
    new window.kakao.maps.LatLng(37.56833564799876, 126.97879048871715),
    new window.kakao.maps.LatLng(37.5500236743432, 127.124404356441),
];

