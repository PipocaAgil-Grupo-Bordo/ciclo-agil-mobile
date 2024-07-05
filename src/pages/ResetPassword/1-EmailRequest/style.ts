import styled from "styled-components/native";

export const Sc = {
  Container: styled.ScrollView`
    background-color: #fafcff;
  `,

  Wrapper: styled.View`
    flex: 1;
    padding: 60px 30px 30px;
    justify-content: space-between;
  `, 

  BackIcon: styled.TouchableOpacity`
    position: absolute;
    top: 40px;
    left: 20px;
  `
};
