import { WhoAmI } from "@type/auth";
import { Sc } from "./style";
import Feather from "react-native-vector-icons/Feather";
import { ColorScheme } from "@styles/globalStyles";

interface UserHeaderProps {
  whoAmI: WhoAmI | undefined;
}

function UserHeader({ whoAmI }: UserHeaderProps) {
  return (
    <Sc.Container>
      <Sc.UserWrapper>
        <Sc.ImageContainer>
          {/* <Sc.Image src="https://github.com/LucianoDLima.png" /> */}
        </Sc.ImageContainer>
        
        {/**Adicionei um contêiner ao redor do texto com flex: 1 para garantir que ele ocupe o espaço disponível e quebre a linha quando necessário */}
        <Sc.TextContainer>
          <Sc.Text>Olá, {whoAmI?.name}</Sc.Text>
        </Sc.TextContainer>
      </Sc.UserWrapper>

      <Sc.SettingsWrapper>
        <Feather size={20} name="settings" color={ColorScheme.icon.idle} />
        <Feather size={20} name="bell" color={ColorScheme.icon.idle} />
      </Sc.SettingsWrapper>
    </Sc.Container>
  );
}

export default UserHeader;
