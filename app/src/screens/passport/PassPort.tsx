import {NavigationProp, useNavigation} from '@react-navigation/native';
import ArrowPrevSvg from 'assets/images/ArrowPrevSvg';
import PassPortPage from 'components/passPort/PassPortPage';
import {Palette} from 'constants/palette';
import {useRef} from 'react';
import Swiper from 'react-native-swiper';
import * as S from 'screens/passport/PassPort.style';

export default function PassPort() {
  const swiperRef = useRef<Swiper>(null);
  const navigation = useNavigation<NavigationProp<RootHomeParamList>>();

  const dummy = [
    {"id": 1},
    {"id": 2},
    {"id": 3},
    {"id": 4},
    {"id": 5},
    {"id": 0},
  ];

  return (
    <S.Container>
      <S.Header>
        <S.ArrowPrevWrapper onPress={() => navigation.navigate('Home')}>
          <ArrowPrevSvg width="9" height="16" fill={Palette.Gray3} />
        </S.ArrowPrevWrapper>
        <S.Title>Your BinVoyage so far</S.Title>
      </S.Header>
      <Swiper
        ref={swiperRef}
        loop={false}
        renderPagination={(index, total) => {
          return (
            <S.Pagination>{Array.from({length: total}).map((_, i) => (i === index ? <S.CurrentDot key={i} /> : <S.Dot key={i} />))}</S.Pagination>
          );
        }}>
        {Array.from({length: 5}).map((page, index) => (
          <PassPortPage key={index} stampList={dummy}/>
        ))}
      </Swiper>
    </S.Container>
  );
}