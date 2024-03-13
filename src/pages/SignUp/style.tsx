import styled from 'styled-components/native';
import { TextLora } from '../../components/TopicText/style';
import { TextMontserrat } from '../../components/TextBox/style';

// Name subject to change. Just a placeholder for now
export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`
export const TopicName = styled(TextLora)`
  font-size: 24px;
`

export const InstructionText = styled(TextMontserrat)`
  font-size: 16px;
`