import {Palette} from 'constants/palette';
import {Typo} from 'constants/typo';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${Palette.White};
  padding: 69px 16px 38px;
`;

export const Step = styled.View`
  padding: 4px 12px;
  border-radius: 100px;
  background: ${Palette.P100};
  align-self: flex-start;
`;

export const StepText = styled.Text`
  font-size: ${Typo.B3.fontSize};
  font-weight: ${Typo.B3.fontWeight};
  color: ${Palette.Primary};
`;

export const Title = styled.Text`
  font-size: ${Typo.Title1.fontSize};
  font-weight: ${Typo.Title1.fontWeight};
  color: ${Palette.Black};
  margin: 6px 0px;
`;

export const Label = styled.Text<{isRequired: boolean}>`
  font-size: ${Typo.B3.fontSize};
  font-weight: ${Typo.B3.fontWeight};
  color: ${props => (props.isRequired ? Palette.Primary : Palette.Gray4)};
`;

export const TextInput = styled.TextInput<{isHighlight: boolean}>`
  padding: 12px;
  background: ${Palette.Gray1};
  border-radius: 12px;
  font-size: ${Typo.B3.fontSize};
  font-weight: ${Typo.B3.fontWeight};
  color: ${Palette.Black};
  border: 1px solid ${props => (props.isHighlight ? Palette.Error : Palette.White)};
  margin-top: 69px;
`;

export const Message = styled.Text`
  font-size: ${Typo.Label.fontSize};
  font-weight: ${Typo.Label.fontWeight};
  color: ${Palette.Error};
`;

export const Button = styled.TouchableOpacity<{isValid: boolean}>`
  width: 100%;
  padding: 16px 30px;
  border-radius: 10px;
  background: ${props => (props.isValid ? Palette.Primary : Palette.Gray2)};
  margin-top: auto;
`;

export const ButtonText = styled.Text<{isValid: boolean}>`
  font-size: ${Typo.Button1.fontSize};
  font-weight: ${Typo.Button1.fontWeight};
  color: ${props => (props.isValid ? Palette.White : Palette.Gray4)};
  text-align: center;
`;
