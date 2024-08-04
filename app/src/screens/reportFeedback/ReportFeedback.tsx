import {NavigationProp, RouteProp, useNavigation} from '@react-navigation/native';
import api from 'api/api';
import ArrowPrevSvg from 'assets/images/ArrowPrevSvg';
import CheckBoxFilledSvg from 'assets/images/CheckBoxFilledSvg';
import CheckBoxSvg from 'assets/images/CheckBoxSvg';
import {Palette} from 'constants/palette';
import {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Toast from 'react-native-toast-message';
import * as S from 'screens/reportFeedback/ReportFeedback.style';

type ReportFeedbackProps = {
  route: RouteProp<RootBinDetailParamList, 'ReportFeedback'>;
};

export default function ReportFeedback({route}: ReportFeedbackProps) {
  const {date, author, content, feedbackId} = route.params;
  const navigation = useNavigation<NavigationProp<RootBinDetailParamList>>();
  const [selected, setSelected] = useState<boolean[]>([false, false, false, false]);
  const [isValid, setIsValid] = useState<boolean>(false);

  const reportTypes = [
    'Looks like spam',
    'Includes offensive or abusive language',
    'Contains hate or discriminatory speech',
    'Shares personal information without consent',
  ];

  const handleSelect = (index: number) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  const handleSubmit = async () => {
    try {
      await api.post('/bin/feedback/report', {
        id: feedbackId,
      });
      Toast.show({
        type: 'success',
        text1: 'Thank you for letting us know. We will review it shortly.',
        position: 'bottom',
        bottomOffset: 100,
        visibilityTime: 2000,
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsValid(selected.some(item => item));
  }, [selected]);

  return (
    <S.Container>
      <S.ArrowPrevWrapper onPress={() => navigation.goBack()}>
        <ArrowPrevSvg width="24" height="24" fill={Palette.Gray4} />
      </S.ArrowPrevWrapper>
      <S.Title>{`Why are you reporting\nthis feedback comment?`}</S.Title>
      <S.DetailWrapper style={{marginBottom: 14}}>
        <S.RowWrapper>
          <S.TextLabel>{author}</S.TextLabel>
          <S.TextLabel>{date}</S.TextLabel>
        </S.RowWrapper>
        <S.TextContent numberOfLines={1} ellipsizeMode="tail">
          {content}
        </S.TextContent>
      </S.DetailWrapper>
      <S.DetailWrapper>
        {reportTypes.map((type, index) => (
          <S.SelectWrapper key={index} isLast={index === reportTypes.length - 1}>
            <TouchableOpacity onPress={() => handleSelect(index)}>
              {selected[index] ? <CheckBoxFilledSvg width="24" height="24" fill={Palette.Primary} /> : <CheckBoxSvg width="24" height="24" />}
            </TouchableOpacity>
            <S.TextReportType>{type}</S.TextReportType>
          </S.SelectWrapper>
        ))}
      </S.DetailWrapper>
      <S.Button onPress={handleSubmit} isValid={isValid} disabled={!isValid}>
        <S.ButtonText isValid={isValid}>Submit</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}