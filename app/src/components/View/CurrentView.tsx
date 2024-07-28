import CurrentSvg from 'assets/images/CurrentSvg';
import {StyleSheet, Text, View} from 'react-native';
import {Palette} from 'constants/palette';
import {Typo} from 'constants/typo';
import styled from 'styled-components/native';

type TabProps = {
  children?: React.ReactNode;
  address?: any;
};

export default function CurrentView({children, address}: TabProps) {
  return (
    <Container>
      <Icons>
        <CurrentSvg width="24px" height="24px" />
      </Icons>
      <Text>{children}</Text>
    </Container>
  );
}

const Wrapper = styled.View`
  width: 100%;
`;

export const Container = styled.View`
  background: #ffffff;
  justify-content: center;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  height: 40px;
  border-radius: 10px;
  width: 344px;
  z-index: 1000;
  align-items: left;
  z-index: 1000;
`;

export const Icons = styled.View`
  margin-left: 12px;
`;

// export const Wrapper = styled.View`
//   position: 'fixed';
//   bottom: 0;
//   left: 0;
//   right: 0;
//   cursor: 'pointer';
//   width: 20%;
//   height: '44px';
//   background-color: #ffffff;
//   border-radius: 10px;
//   display: 'flex';
//   align-content: 'space-between';
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   margin: 56px 0 0 12px;
//   color: 'black';
// `;
