/* eslint-disable prettier/prettier */
type RootTabParamList = {
  HomeNavigator: undefined;
  FindBin: undefined;
  MyPage: undefined;
};

type RootStackParamList = {
  BottomNavigator: undefined;
  Login: undefined;
  OnBoarding: undefined;
  UserInput: undefined;
  BinDetailNavigator: {
    screen: 'BinDetail' | 'FeedbackList' | 'ReportFeedback' | 'ReportWrongInfo' | 'VerifyVisit';
    params?: {
      bin_id?: number;
    };
  };
};

type RootHomeParamList = {
  Home: undefined;
  PassPort: undefined;
};

type RootBinDetailParamList = {
  BinDetail: {bin_id: number};
  FeedbackList: {bin_id: number};
  ReportFeedback: {date: string; author: string; content: string; feedbackId: number};
  ReportWrongInfo: {
    bin_id: number;
    type_name: string;
    location_type_name: string;
    address: string;
    detail: string;
    image: string;
    isVerifyVisit: boolean;
  };
  VerifyVisit: {
    bin_id: number;
    type_name: string;
    location_type_name: string;
    address: string;
    detail: string;
    image: string;
    coordinate: [number, number];
  };
};
