import { Sc } from "./header.style";

function Header() {
  return (
    <Sc.Wrapper>
      <Sc.HeaderWrapper>
        <Sc.Title>Quem somos nós?</Sc.Title>
        <Sc.Title>Equipe Ciclo Ágil</Sc.Title>
      </Sc.HeaderWrapper>

      <Sc.SubTitle>Esses são os colaboradores que fizeram este app:</Sc.SubTitle>
    </Sc.Wrapper>
  );
}
export default Header;
