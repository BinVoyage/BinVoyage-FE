import CurrentSvg from 'assets/images/CurrentSvg';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Palette} from 'constants/palette';
import {Typo} from 'constants/typo';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';

type Dummy = {
  data?: any;
  item?: any;
};

const {width: screenWidth} = Dimensions.get('window');

const dummyData = [
  {id: 1, title: '주소 1'},
  {id: 2, title: '주소 2'},
  {id: 3, title: '주소 3'},
  {id: 4, title: '주소 4'},
  {id: 5, title: '주소 5'},
];

const AddressCarousel = ({data}: Dummy) => {
  const renderItem = ({item}: any) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      containerCustomStyle={styles.slider}
      sliderWidth={screenWidth}
      itemWidth={screenWidth}
      layout={'default'}
    />
  );
};

export default function ArroundAddress() {
  return (
    <View>
      <Text style={styles.text}>Text1</Text>
      <AddressCarousel data={dummyData} />
    </View>
  );
}

const Container = styled.View`
  /* flex: 1; */
  height: 138px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: Palette.Gray2,
  },

  card: {
    backgroundColor: Palette.Gray1,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth - 40,
    marginHorizontal: 20,
    height: 200,
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  slider: {
    width: 232,
  },
});

// export const Container = styled.View`
//   background: #ffffff;
//   justify-content: center;
//   margin-left: 12px;
//   margin-right: 12px;
//   margin-bottom: 10px;
//   margin-top: 10px;
//   display: flex;
//   height: 40px;
//   border-radius: 10px;
//   width: 344px;
//   z-index: 1000;
//   align-items: left;
//   z-index: 1000;
// `;

// export const Icons = styled.View`
//   margin-left: 12px;
// `;
