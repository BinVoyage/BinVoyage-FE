import * as S from 'components/userInput/UserInput.style';
import {Palette} from 'constants/palette';
import {useEffect, useState} from 'react';

interface Props {
  onNext: (value: string) => void;
}

export default function NameInput({onNext}: Props) {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [value, setInput] = useState<string>('');

  useEffect(() => {
    if (value.length === 0) {
      setMessage('');
      setIsValid(false);
      return;
    }

    if (value.length < 2 || value.length > 8) {
      setMessage('Nickname: 2-8 characters');
      setIsValid(false);
      return;
    }

    setMessage('');
    setIsValid(true);
  }, [value]);

  return (
    <S.Container>
      <S.Step>
        <S.StepText>1/2</S.StepText>
      </S.Step>
      <S.Title>What should we call you?</S.Title>
      <S.Label isRequired={true}>*Required</S.Label>
      <S.TextInput
        isHighlight={message.length > 0}
        value={value}
        onChangeText={setInput}
        placeholder="Please write your nickname here"
        placeholderTextColor={Palette.Gray4}
      />
      <S.Message>{message}</S.Message>
      <S.Button disabled={!isValid} isValid={isValid} onPress={() => onNext(value)}>
        <S.ButtonText isValid={isValid}>Next</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
