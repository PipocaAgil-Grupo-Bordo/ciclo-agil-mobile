import styled from "styled-components/native";

export const SlideContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const SlideImage = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

export const SlideTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const SlideText = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
  color: #666;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  gap: 15px;
  margin-bottom: 20px;
`;
