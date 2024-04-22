import { StyledText } from "@components/TextBox/style";
import { horizontalScale, verticalScale } from "@utils/responsivenessHelper";

import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex: 1;
    background-color: #fafcff;
    padding: ${verticalScale(52) + "px" + horizontalScale(21) + "px" + verticalScale(48) + "px"};
    justify-content: center;
  `,

  Wrapper: styled.View`
    align-items: center;
    justify-content: space-between;
    background-color: blueviolet;
  `,
  SubTitle: styled(StyledText)``
};
