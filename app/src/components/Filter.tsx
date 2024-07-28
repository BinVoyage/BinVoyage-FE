import styled from 'styled-components/native';
import TrashRoundSvg from 'assets/images/TrashRoundSvg';
import RecycleRoundSvg from 'assets/images/RecycleRoundSvg';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Filter() {
  return (
    <Container>
      <RecentBox>
        <Texts>Recently Visited</Texts>
      </RecentBox>
      <RecycleButtons>
        {/* <RecycleBox>
          <RecycleRoundSvg width="26px" height="26px" /> */}
        <Texts>recycling</Texts>
        {/* </RecycleBox> */}
      </RecycleButtons>
      <TrashButtons>
        {/* <TrashBox> */}
        {/* <TrashRoundSvg width="26px" height="26px" /> */}
        <Texts>Trash</Texts>
        {/* </TrashBox> */}
      </TrashButtons>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  position: 'fixed';
  top: 0;
  left: 0;
  right: 0;
  /* z-index: 1000; */
  /* cursor */
  width: 100%;
  height: 40px;
  display: 'flex';
  align-items: left;
  align-content: 'space-between';
  justify-content: flex-start;
  margin-top: '54px';
  color: 'black;';
  flex-direction: 'row';
`;

const Texts = styled.Text`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.6px;
  letter-spacing: -0.07px;
`;

const RecentBox = styled.TouchableOpacity`
  margin-right: 8px;
  margin-left: 4px;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  background-color: white;
  width: 121px;
  height: 30px;
  border-radius: 22px;
  text-align: center;
  padding-top: 4px;
  color: black;
  flex-direction: 'row';
`;

const RecycleButtons = styled.TouchableOpacity`
  display: inline-flex;
  flex-direction: 'row';
  top: 0;
  margin: auto;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: white;
  width: 101px;
  height: 30px;
  /* box-shadow: 0px 2px 6px 0px #00000033; */
  border-radius: 22px;
  flex-direction: 'row';
`;

const TrashButtons = styled.TouchableOpacity`
  display: inline-flex;
  height: 30px;
  margin: auto;
  bottom: 0;
  margin-right: 40px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  background-color: white;
  width: 76px;
  height: 30px;
  border-radius: 22px;
`;
