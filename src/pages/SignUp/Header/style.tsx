import styled from "styled-components/native"
import { TextLora } from "../../../components/TopicText/style"
import { StyledText } from "../../../components/TextBox/style";


export const StyledTopicName = styled(TextLora)`
  font-size: 24px;
  padding: 16px 0px;
`

export const StyledInstructionText = styled(StyledText)`
  font-size: 16px;
  padding: 16px 0px;
`


export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
