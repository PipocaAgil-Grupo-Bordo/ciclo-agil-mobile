import styled from "styled-components/native";
import { TextLora } from "@components/TopicText/style";
import { StyledText } from "@components/TextBox/style";

export const StyledContainer = styled.View`
  align-items: center;
`;

export const StyledTopicName = styled(TextLora)`
  font-size: 24px;
  margin: 32px 0px;
`;

export const StyledInstructionText = styled(StyledText)`
  font-size: 16px;
`;
