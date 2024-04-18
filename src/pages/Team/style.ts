import { StyledText } from "@components/TextBox/style";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.ScrollView`
    background-color: #fafcff;
    padding: 56px 24px 0px;
  `,

  Wrapper: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 56px;
  `,
  SubTitle: styled(StyledText)`
    width: 74%;
    text-align: center;
  `
};
