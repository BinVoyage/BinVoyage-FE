import DefaultText from 'components/DefaultText';
import {Palette} from 'constants/palette';
import {Typo} from 'constants/typo';
import styled from 'styled-components/native';

export const Background = styled.View`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  bottom: 0;
`;

export const Wrapper = styled.View`
  width: 100%;
  height: 427px;
  border-radius: 20px 20px 0px 0px;
  background: ${Palette.Gray1};
  gap: 6px;
  margin-top: auto;
`;

export const Header = styled.View`
  border-radius: 20px 20px 0px 0px;
  padding: 8px 0px 18px;
  align-items: center;
  background: ${Palette.White};
`;

export const Indicator = styled.View`
  border-radius: 2px;
  width: 45px;
  height: 4px;
  background: ${Palette.Gray2};
`;

export const Title = styled(DefaultText)`
  font-size: ${Typo.Title1.fontSize};
  font-weight: ${Typo.Title1.fontWeight};
  color: ${Palette.Black};
  margin: 19px 0px 4px;
`;

export const Description = styled(DefaultText)`
  font-size: ${Typo.B3.fontSize};
  font-weight: ${Typo.B3.fontWeight};
  color: ${Palette.Gray5};
`;

export const Body = styled.View`
  padding: 16px 18px 38px;
  flex: 1;
  background: ${Palette.White};
`;

export const AcceptAllWrapper = styled.View`
  flex-direction: row;
  gap: 6px;
  align-items: center;
  padding: 11px 10px;
  background: ${Palette.Gray2};
  border-radius: 8px;
`;

export const TextAcceptAll = styled(DefaultText)`
  font-size: ${Typo.B1.fontSize};
  font-weight: ${Typo.B1.fontWeight};
  color: ${Palette.Black};
`;

export const AgreementWrapper = styled.View`
  flex-direction: row;
  gap: 6px;
  align-items: center;
  padding: 18px 0px;
`;

export const TextWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const TextAgreement = styled(DefaultText)`
  font-size: ${Typo.B3.fontSize};
  font-weight: ${Typo.B3.fontWeight};
  color: ${Palette.Gray6};
  white-space: normal;
`;
export const TextRequired = styled(DefaultText)`
  font-size: ${Typo.B3.fontSize};
  font-weight: ${Typo.B3.fontWeight};
  color: ${Palette.Primary};
  white-space: normal;
`;

export const TextAgreementLink = styled(DefaultText)`
  font-size: ${Typo.B3.fontSize};
  font-weight: ${Typo.B3.fontWeight};
  color: ${Palette.Primary};
  text-decoration: underline;
  text-decoration-color: ${Palette.Primary};
  white-space: normal;
`;

export const Button = styled.TouchableOpacity<{isValid: boolean}>`
  width: 100%;
  padding: 16px 30px;
  border-radius: 10px;
  background: ${props => (props.isValid ? Palette.Primary : Palette.Gray2)};
  margin-top: auto;
`;

export const ButtonText = styled(DefaultText)<{isValid: boolean}>`
  font-size: ${Typo.Button1.fontSize};
  font-weight: ${Typo.Button1.fontWeight};
  color: ${props => (props.isValid ? Palette.White : Palette.Gray4)};
  text-align: center;
`;
