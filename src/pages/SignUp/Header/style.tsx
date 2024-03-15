import styled from "styled-components/native"
import { TextLora } from "../../../components/TopicText/style"
import { TextMontserrat } from "../../../components/TextBox/style"

export const TopicName = styled(TextLora)`
  font-size: 24px;
  padding: 16px 0px;
`

export const InstructionText = styled(TextMontserrat)`
  font-size: 16px;
  padding: 16px 0px;
`


export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
