import { StyledText } from "@components/TextBox/style";

import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex: 1;
    background-color: #fafcff;
    padding: 56px 24px 24px;
    justify-content: center;
  `,

  Wrapper: styled.View`
    align-items: center;
    
  `,
  SubTitle: styled(StyledText)``
};
