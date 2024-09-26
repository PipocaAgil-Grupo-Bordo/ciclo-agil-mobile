import styled from "styled-components/native";

export const Sc = {
  ContainerWithoutScroll: styled.View`
    flex: 1;
    padding: 28px 16px 0px 16px;
    background-color: #fafcff;
  `,
  Content: styled.View`
    flex: 1;
    padding-top: 20px; /* Para espaçar o conteúdo do header */
  `,
  Calendar: styled.View`
    flex: 1;
    gap: 20px;
    padding-top: 20px; /* Para espaçar o conteúdo do header */
  `,
}; 